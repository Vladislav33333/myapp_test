import { useState, useEffect, useMemo, useCallback } from "react";
import "./toolPage.css";
import { SearchBar } from "../../helpers/ToolSearch";
import { ToolPageBackBtn } from "../../buttons/ToolPageBackBtn";
import { emptyRow } from "../../helpers/emptyRow";
import { categories } from "../../helpers/toolsData";
import ToolTemplate from "../toolTemplate/ToolTemplate";
import ToolPageButtons from "../../buttons/ToolPageButtons";
import { ref, onValue, update, get } from "firebase/database";
import { db } from "../../../../../firebase";

const ToolPage = ({ toolType = "mill" }) => {
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toolsData, setToolsData] = useState({});

  // Загрузка данных из Firebase
  useEffect(() => {
    const toolsRef = ref(db, `categories/${toolType}/tools`);
    const unsubscribe = onValue(toolsRef, (snapshot) => {
      if (snapshot.exists()) {
        setToolsData(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, [toolType]);

  // Функция обновления счетчика
  const updateCount = useCallback(async (toolKey, delta) => {
    const toolRef = ref(db, `categories/${toolType}/tools/${toolKey}`);

    try {
      const snapshot = await get(toolRef);
      if (snapshot.exists()) {
        const toolData = snapshot.val();
        const newCount = Math.max(0, (toolData.count || 0) + delta);

        // Обновляем Firebase
        await update(toolRef, { count: newCount });

        // КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Обновляем локальное состояние
        setToolsData(prev => ({
          ...prev,
          [toolKey]: {
            ...prev[toolKey],
            count: newCount
          }
        }));
      }
    } catch (error) {
      console.error("Error updating count:", error);
    }
  }, [toolType]);

  // Подготовка данных для отображения
  const { title, filteredTools } = useMemo(() => {
    const category = categories[toolType] || {
      title: "Категория не найдена",
      tools: {}
    };

    const toolsToUse = Object.keys(toolsData).length > 0 ? toolsData : category.tools;

    // СОХРАНЯЕМ ИСХОДНЫЙ ПОРЯДОК
    const originalOrder = Object.keys(category.tools);

    // СОЗДАЕМ МАССИВ В НУЖНОМ ПОРЯДКЕ
    const toolsArray = originalOrder.map(key => {
      // Используем данные из Firebase, если они есть, иначе из исходных данных
      const tool = toolsToUse[key] || category.tools[key];
      return {
        key,
        ...tool
      };
    });

    return {
      title: category.title,
      filteredTools: toolsArray.filter(tool =>
        tool &&
        tool.name &&
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  }, [toolType, searchQuery, toolsData]);

  const handleEditClick = useCallback(() => setEditMode(true), []);
  const handleOkClick = useCallback(() => setEditMode(false), []);

  return (
    <div className="ToolPage">
      <div className="nav">
        <ToolPageBackBtn />
        <SearchBar onClick={searchQuery} onChange={setSearchQuery} />
      </div>
      <h1>{title}</h1>
      <div>
        <ToolPageButtons {...{ editMode, handleEditClick, handleOkClick }} />
        {filteredTools.length === 0 ? (
          emptyRow
        ) : (
          <div className="tools-list">
            {filteredTools.map((tool) => (
              <ToolTemplate
                key={tool.key} // Используем ключ объекта
                id={tool.id}
                name={tool.name}
                count={tool.count}
                isEditing={editMode}
                onPlus={() => updateCount(tool.key, 1)} // Передаем ключ объекта
                onMinus={() => updateCount(tool.key, -1)} // Передаем ключ объекта
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ToolPage;
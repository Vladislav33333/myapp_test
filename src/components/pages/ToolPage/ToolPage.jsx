import { useState, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import ToolTemplate from "../ToolTemplate/ToolTemplate";
import { categories } from "../../../services/toolsData";
import "./ToolPage.css";

export const ToolPage = ({ toolType = "mill" }) => {
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { title, filteredTools } = useMemo(() => {
    const category = categories[toolType] || {
      title: "Категория не найдена",
      tools: {},
    };
    const toolsArray = Object.values(category.tools);

    return {
      title: category.title,
      filteredTools: toolsArray.filter((tool) =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    };
  }, [toolType, searchQuery]);

  const handleEditClick = () => setEditMode(true);
  const handleOkClick = () => setEditMode(false);

  const Row = ({ index, style }) => {
    const tool = filteredTools[index];
    return (
      <div style={style}>
        <ToolTemplate
          key={tool.id}
          id={tool.id}
          name={tool.name}
          isEditing={editMode}
        />
      </div>
    );
  };

  return (
    <div className="ToolPage">
      <h1>{title}</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="list-container">
        <List
          height={500} // Уменьшили высоту для места под кнопки
          itemCount={filteredTools.length}
          itemSize={110}
          width="100%"
        >
          {Row}
        </List>
      </div>

      <div className="buttons-container">
        <button
          className="tool-page_btn"
          disabled={editMode}
          onClick={handleEditClick}
          type="button"
        >
          Edit
        </button>
        <button
          className="tool-page_btn"
          disabled={!editMode}
          onClick={handleOkClick}
          type="button"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

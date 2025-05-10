import { useState, useMemo, useCallback } from "react";
import "./ToolPage.css";
import { SearchBar } from "../../../components/pages/ToolPage/ToolPageSearchBar";
import { ToolPageBackBtn } from "../../pages/ToolPage/ToolPageBackBtn";
import { emptyRow } from "../../../services/emptyRow";
import { categories } from "../../../services/toolsData";
import ToolTemplate from "../ToolTemplate/ToolTemplate";
import ToolPageButtons from "../ToolPage/ToolPageButtons";

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
                key={tool.id}
                id={tool.id}
                name={tool.name}
                isEditing={editMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

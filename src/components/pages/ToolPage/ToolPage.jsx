import { useState, useMemo, useCallback } from "react";
import "./ToolPage.css";
import { FixedSizeList as List } from "react-window";
import { SearchBar } from "../../../components/pages/ToolPage/ToolPageSearchBar";
import { ToolPageBackBtn } from "../../pages/ToolPage/ToolPageBackBtn";
import { emptyRow } from "../../../services/emptyRow";
import { categories } from "../../../services/toolsData";
import ToolTemplate from "../ToolTemplate/ToolTemplate";
import ToolPageButtons from "../ToolPage/ToolPageButtons";
// import { Link } from "react-router-dom";
// import { ZrTools } from "../ZrTools/ZrTools";
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

  const Row = ({ index, style }) => {
    const tool = filteredTools[index];
    return (
      <div style={style}>
        <ToolTemplate id={tool.id} name={tool.name} isEditing={editMode} />
      </div>
    );
  };

  return (
    <div className="ToolPage">
      <h1>{title}</h1>

      <div className="nav">
        <ToolPageBackBtn />
      </div>

      <SearchBar onClick={searchQuery} onChange={setSearchQuery} />

      <div className="list-container">
        <List
          height={460}
          itemCount={filteredTools.length}
          itemSize={110}
          width="100%"
        >
          {filteredTools.length === 0 ? emptyRow : Row}
        </List>
      </div>
      <ToolPageButtons {...{ editMode, handleEditClick, handleOkClick }} />
    </div>
  );
};

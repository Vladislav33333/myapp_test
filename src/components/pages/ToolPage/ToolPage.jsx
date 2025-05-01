import ToolTemplate from "../ToolTemplate/ToolTemplate";
import toolsData from "../../../services/toolsData";
import "./ToolPage.css";
import { useState } from "react";

export const ToolPage = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleOkClick = () => {
    setEditMode(false);
  };

  return (
    <div className="ToolPage">
      <h1>Фрезы для 350i / X10 RUS</h1>
      <div className="ToolTemplate_container">
        <ToolTemplate
          id={toolsData.tool1.id}
          name={toolsData.tool1.name}
          isEditing={editMode}
        />
        <ToolTemplate
          id={toolsData.tool2.id}
          name={toolsData.tool2.name}
          isEditing={editMode}
        />
        <ToolTemplate
          id={toolsData.tool3.id}
          name={toolsData.tool3.name}
          isEditing={editMode}
        />
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

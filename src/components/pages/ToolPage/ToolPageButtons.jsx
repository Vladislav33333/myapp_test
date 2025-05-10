import { memo } from "react";
import "./ToolPage.css";

const ToolPageButtons = memo(({ editMode, handleEditClick, handleOkClick }) => {
  return (
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
  );
});
export default ToolPageButtons;

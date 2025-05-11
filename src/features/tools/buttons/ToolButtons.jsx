import "../components/toolTemplate/toolTemplate.css";

export const ToolButtons = ({ isEditing, onPlus, onMinus }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onPlus}
        disabled={!isEditing}
        className="toolTemplate_Btn"
      >
        +
      </button>
      <button
        type="button"
        onClick={onMinus}
        disabled={!isEditing}
        className="toolTemplate_Btn"
      >
        -
      </button>
    </div>
  );
};

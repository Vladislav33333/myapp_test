import "../components/toolTemplate/toolTemplate.css";

export const ToolButtons = ({ isEditing, onPlus, onMinus }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => { console.log("plus"); onPlus(); }}
        disabled={!isEditing}
        className="toolTemplate_Btn"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => { console.log("MINUS"); onMinus(); }}
        disabled={!isEditing}
        className="toolTemplate_Btn"

      >
        -
      </button>

    </div>
  );
};

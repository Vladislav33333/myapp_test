import "../components/toolTemplate/toolTemplate.css";

export const ToolButtons = ({ isEditing, onPlus, onMinus }) => {
  return (
    <div>
      <button
        className="toolTemplate_Btn"
        type="button"
        onClick={() => { console.log("plus"); onPlus(); }}
        disabled={!isEditing}

      >
        +
      </button>
      <button
        className="toolTemplate_Btn"
        type="button"
        onClick={() => { console.log("MINUS"); onMinus(); }}
        disabled={!isEditing}
      >
        -
      </button>

    </div>
  );
};

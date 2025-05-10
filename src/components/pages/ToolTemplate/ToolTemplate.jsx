import "./ToolTemplate.css";
import useCounter from "../../../services/toolCounter.js";
import { borderLight } from "../../../services/borderLight.js";

function ToolTemplate(props) {
  const { count, plusCount, minusCount } = useCounter();

  return (
    <div style={borderLight(props.isEditing)} className="ToolTemplate">
      <h3>{props.name}</h3>
      <ul className="ToolTemplate_ul">
        <li>Наличие: {count}</li>
        <li>Артикул: {props.id}</li>
      </ul>
      <button
        className="ToolTemplate_Btn"
        onClick={plusCount}
        type="button"
        disabled={!props.isEditing}
      >
        +
      </button>
      <button
        className="ToolTemplate_Btn"
        onClick={minusCount}
        type="button"
        disabled={!props.isEditing}
      >
        -
      </button>
    </div>
  );
}

export default ToolTemplate;

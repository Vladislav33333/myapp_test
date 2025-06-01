import { useState } from "react";
import "./toolTemplate.css";
import { ToolButtons } from "../../buttons/ToolButtons.jsx";
import { toolBorderActive } from "../../helpers/toolBorderActive.js";

function ToolTemplate(props) {
  // Состояние счетчика теперь здесь
  const [count, setCount] = useState(0);

  const plusCount = () => setCount((prev) => prev + 1);
  const minusCount = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <div style={toolBorderActive(props.isEditing)} className="toolTemplate">
      <h3>{props.name}</h3>
      <ul className="toolTemplate_ul">
        <li>Наличие: {count}</li>
        <li>Артикул: {props.id}</li>
      </ul>
      <ToolButtons
        isEditing={props.isEditing}
        onPlus={plusCount}
        onMinus={minusCount}
      />
    </div>
  );
}

export default ToolTemplate;

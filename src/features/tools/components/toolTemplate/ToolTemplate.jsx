import "./toolTemplate.css";
import { ToolButtons } from "../../buttons/ToolButtons.jsx";
import { toolBorderActive } from "../../helpers/toolBorderActive";

function ToolTemplate(props) {
  const {
    count,
    name,
    id,
    isEditing,
    onPlus,   // Функция для увеличения
    onMinus   // Функция для уменьшения
  } = props;

  return (
    <div style={toolBorderActive(isEditing)} className="toolTemplate">
      <h3>{name}</h3>
      <ul className="toolTemplate_ul">
        <li>Наличие: {count}</li>
        <li>Артикул: {id}</li>
      </ul>
      <ToolButtons
        isEditing={isEditing}
        onPlus={onPlus}
        onMinus={onMinus}
      />
    </div>
  );
}

export default ToolTemplate;
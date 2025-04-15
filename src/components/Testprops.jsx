import React from "react";
import { useState } from "react";
import "./TestProps.css";

function Testprops(props) {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((value) => ++value);
  };

  const minusCount = () => {
    setCount((value) => (value ? value - 1 : value));
  };

  return (
    <div className="TestProps enabled" enabled={!props.borderLight}>
      <h3>{props.name}</h3>
      <ul className="TestProps_ul">
        <li>Наличие: {count}</li>
        <li>Артикул: {props.id}</li>
      </ul>

      <button
        className="TestProps_Btn"
        onClick={plusCount}
        type="button"
        disabled={!props.isEditing} // Добавляем disabled
      >
        +
      </button>
      <button
        className="TestProps_Btn"
        onClick={minusCount}
        type="button"
        disabled={!props.isEditing} // Добавляем disabled
      >
        -
      </button>
    </div>
  );
}

export default Testprops;

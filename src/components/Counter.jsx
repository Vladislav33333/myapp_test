// import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNumber = () => {
    setNumbers((prev) => {
      const newNumbers = [...prev, prev.length + 1];
      console.log("Добавляем число:", newNumbers);
      return newNumbers;
    });
  };

  const removeNumber = (index) => {
    setNumbers((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log("Состояние обновлено:", numbers);
  }, [numbers]);

  return (
    <>
      <h2>{numbers.join(",")}</h2>
      <button onClick={addNumber}>Добавить +1</button>
      {/*remove numbers:*/}
      {numbers.map((num, index) => (
        <button key={index} onClick={() => removeNumber(index)}>
          Удалить {num}
        </button>
      ))}
    </>
  );
}

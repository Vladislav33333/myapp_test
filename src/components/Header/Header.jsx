import { useState } from "react";

export default function Header() {
  const [counter, setCounter] = useState(0);

  // Функции для изменения состояния
  const inc = () => setCounter((prev) => prev + 1);
  const dec = () => setCounter((prev) => Math.max(0, prev - 1));

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

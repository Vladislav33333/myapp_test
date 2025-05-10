import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const plusCount = () => {
    setCount((value) => ++value);
  };

  const minusCount = () => {
    setCount((value) => (value ? value - 1 : value));
  };
  return { count, plusCount, minusCount };
};
export default useCounter;

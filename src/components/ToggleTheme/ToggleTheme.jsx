import { useState } from "react";
import "./ToggleTheme.css";

export default function Toggle() {
  const [isDark, setDark] = useState(true);

  const toggleFn = () => {
    setDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <button className="primary--btn" onClick={toggleFn}>
        {isDark ? "☼" : "☀"}
      </button>
    </div>
  );
}

import { useState, useEffect } from "react"
import ThemeContext from "./ThemeContext";

export default function Theme({ children }) {
  // Инициализация темы из localStorage
  const [theme, setTheme] = useState(() => {
    // Проверка на серверном окружении (Next.js и подобные)
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme || "light";
    }
    return "light"; // Значение по умолчанию для SSR
  });

  document.body.dataset.theme = theme;
  // Автоматическое сохранение темы при изменении
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }

  }, [theme]);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

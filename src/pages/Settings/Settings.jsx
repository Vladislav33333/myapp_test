import { useContext } from "react";
import ThemeContext from "../../components/ThemeMode/providers/ThemeContext";

const Settings = () => {

  const [theme, setTheme] = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button className="link" onClick={changeTheme}>{theme}</button>
    </div>
  )
}
export default Settings;
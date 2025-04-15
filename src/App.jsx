import "./App.css";
import "./components/ToggleTheme/ToggleTheme.css";
import Testprops from "./components/Testprops";
import users from "./components/toolsData";
import { useState } from "react";

const App = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleOkClick = () => {
    setEditMode(false);
  };

  const borderLight = {
    boxShadow: "4px 4px 8px 0px rgba(171, 171, 171, 0.191)",
    border: "1px solir red",
  };

  const borderLightOn = () => {};

  return (
    <div className="App">
      <h1>Mill tools</h1>
      <div className="TestProps_container">
        <Testprops
          id={users.tool1.id}
          name={users.tool1.name}
          isEditing={editMode}
          enabled={borderLight}
        />
        <Testprops
          id={users.tool2.id}
          name={users.tool2.name}
          isEditing={editMode}
          enabled={borderLight}
        />
        <Testprops
          id={users.tool3.id}
          name={users.tool3.name}
          isEditing={editMode}
          enabled={borderLight}
        />
        <Testprops
          id={users.tool4.id}
          name={users.tool4.name}
          isEditing={editMode}
          enabled={borderLight}
        />
        <button
          className="app_btn"
          disabled={editMode}
          onClick={handleEditClick}
          type="button"
          enabled={borderLightOn}
        >
          Редактировать
        </button>
        <button
          className="app_btn"
          disabled={!editMode}
          onClick={handleOkClick}
          type="button"
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
};
export default App;

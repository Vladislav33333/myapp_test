import "./App.css";
import "./components/ToggleTheme/ToggleTheme.css";
import ToolTemplate from "./components/ToolTemplate";
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

  return (
    <div className="App">
      <h1>Mill tools</h1>
      <div className="TestProps_container">
        <ToolTemplate
          id={users.tool1.id}
          name={users.tool1.name}
          isEditing={editMode}
        />
        <ToolTemplate
          id={users.tool2.id}
          name={users.tool2.name}
          isEditing={editMode}
        />
        <ToolTemplate
          id={users.tool3.id}
          name={users.tool3.name}
          isEditing={editMode}
        />
        <button
          className="app_btn"
          disabled={editMode}
          onClick={handleEditClick}
          type="button"
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

import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "./loginForm.css";
import "../Header/Header.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "1" && password === "1") {
      login();
    } else {
      setError("Неверные учетные данные");
    }
  };

  return (
    <>
      <h2 className="login_title">DAD - Storage</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login_form_input">
          <input
            className="login_form_input_item"
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="login_form_input_item"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="loginBtn">
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

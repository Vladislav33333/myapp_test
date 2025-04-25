import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { ToolPage } from "././components/pages/ToolPage/ToolPage.jsx";
const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/mill-tools">Фрезы</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/mill-tools" element={<ToolPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

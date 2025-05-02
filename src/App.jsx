import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { ToolPage } from "././components/pages/ToolPage/ToolPage.jsx";
// import { ZrTools } from "./components/pages/ZrTools/ZrTools.jsx";
// import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <nav className="nav">
            <Link className="link" to="/">
              Главная
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/mill-tools" element={<ToolPage />} />
            <Route
              path="/zr-tools"
              element={<ToolPage toolType="aiditeHT" />}
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
};
export default App;

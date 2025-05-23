import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { ToolPage } from "././components/pages/ToolPage/ToolPage.jsx";
import { ZrTools } from "./components/pages/ZrTools/ZrTools.jsx";

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
            <Route path="/mill-tools" element={<ToolPage toolType="mill" />} />
            <Route
              path="/zr-blocks"
              element={<ToolPage toolType="aiditeHT" />}
            />

            <Route path="/zr-tools" element={<ZrTools />} />
            <Route path="/test" element={<ToolPage toolType="test" />} />
            <Route path="/test2" element={<ToolPage toolType="test2" />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
};
export default App;

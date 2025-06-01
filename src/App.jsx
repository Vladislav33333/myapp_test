import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import { ToolPage } from "./features/tools/components/toolPage/ToolPage";
import ZrTools from "./pages/ZrTools/ZrTools";
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
            <Route path="/zr-tools" element={<ZrTools />} />
            <Route
              path="/aiditeHT"
              element={<ToolPage toolType="aiditeHT" />}
            />
            <Route
              path="/upceraFunc"
              element={<ToolPage toolType="upceraFunc" />}
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
};
export default App;

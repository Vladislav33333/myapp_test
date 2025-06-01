import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Header/Layout";
import ToolPage from "./features/tools/components/toolPage/ToolPage";
import { HomePage } from "./pages/HomePage/HomePage";
import ZrTools from "./pages/ZrTools/ZrTools";

// Добавьте этот компонент

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/mill-tools"
              element={
                <Layout>
                  <ToolPage toolType="mill" />
                </Layout>
              }
            />
            <Route
              path="/zr-tools"
              element={
                <Layout>
                  <ZrTools />
                </Layout>
              }
            />

            <Route
              path="/zr-tools/aiditeHT"
              element={
                <Layout>
                  <ToolPage toolType="aiditeHT" />
                </Layout>
              }
            />
            <Route
              path="/zr-tools/upceraFunc"
              element={
                <Layout>
                  <ToolPage toolType="upceraFunc" />
                </Layout>
              }
              upceraFunc
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;

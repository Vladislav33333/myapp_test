import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth_test/AuthContext";
import LoginForm from "./components/Auth_test/LoginForm";
import { AuthContext } from "./components/Auth_test/AuthContext";
import { Layout } from "./components/Header/Layout";
import ToolPage from "./features/tools/components/toolPage/ToolPage";
import { HomePage } from "./pages/HomePage/HomePage";
import ZrTools from "./pages/ZrTools/ZrTools";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <Routes>
            <Route
              path="/"
              element={
                <AuthProvider>
                  <AuthContext.Consumer>
                    {({ isAuthenticated }) =>
                      isAuthenticated ? (
                        <Layout>
                          <HomePage />
                        </Layout>
                      ) : (
                        <LoginForm />
                      )
                    }
                  </AuthContext.Consumer>
                </AuthProvider>
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

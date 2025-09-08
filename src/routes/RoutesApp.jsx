import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../components/Auth_test/AuthContext";
import LoginForm from "../components/Auth_test/LoginForm";
import { AuthContext } from "../components/Auth_test/AuthContext";
import { Layout } from "../components/Header/Layout";
import ToolPage from "../features/tools/components/toolPage/ToolPage";
import { HomePage } from "../pages/HomePage/HomePage";
import ZrTools from "../pages/ZrTools/ZrTools";
import AiditeMenu from "../components/AllTools/Zircon/AiditeMenu/AiditeMenu";
import AiditeSizeMenu from "../components/AllTools/Zircon/AiditeMenu/AiditeSizeMenu";
import UpceraMenu from "../components/AllTools/Zircon/UpceraMenu/UpceraMenu";
import UpceraSizeMenu from "../components/AllTools/Zircon/UpceraMenu/UpceraSizeMenu";
import Settings from "../pages/Settings/Settings";

export const RoutesApp = () => {
  return (
    <>
      <Routes>
        {/* Главная страница */}
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

        {/* Страница фрез */}
        <Route
          path="/mill-tools"
          element={
            <Layout>
              <ToolPage toolType="mill" />
            </Layout>
          }
        />

        {/* Страница циркониевых инструментов - меню выбора */}
        <Route
          path="/zr-tools"
          element={
            <Layout>
              <ZrTools />
            </Layout>
          }
        />
        {/* Страница настроек приложения - меню выбора */}
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        {/* Меню выбора типа Aidite */}
        <Route
          path="/zr-tools/aidite"
          element={
            <Layout>
              <AiditeMenu />
            </Layout>
          }
        />


        {/* Меню выбора размера для Aidite HT */}
        <Route
          path="/zr-tools/aidite/ht"
          element={
            <Layout>
              <AiditeSizeMenu type="ht" />
            </Layout>
          }
        />

        {/* Меню выбора размера для Aidite ST */}
        <Route
          path="/zr-tools/aidite/st"
          element={
            <Layout>
              <AiditeSizeMenu type="st" />
            </Layout>
          }
        />

        {/* Страницы с цветами и количеством */}
        <Route
          path="/zr-tools/aidite/ht/14"
          element={
            <Layout>
              <ToolPage toolType="aiditeHT_14" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/ht/16"
          element={
            <Layout>
              <ToolPage toolType="aiditeHT_16" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/ht/18"
          element={
            <Layout>
              <ToolPage toolType="aiditeHT_18" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/ht/20"
          element={
            <Layout>
              <ToolPage toolType="aiditeHT_20" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/ht/22"
          element={
            <Layout>
              <ToolPage toolType="aiditeHT_22" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/st/14"
          element={
            <Layout>
              <ToolPage toolType="aiditeST_14" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/st/16"
          element={
            <Layout>
              <ToolPage toolType="aiditeST_16" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/st/18"
          element={
            <Layout>
              <ToolPage toolType="aiditeST_18" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/st/20"
          element={
            <Layout>
              <ToolPage toolType="aiditeST_20" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/aidite/st/22"
          element={
            <Layout>
              <ToolPage toolType="aiditeST_22" />
            </Layout>
          }
        />

        <Route
          path="/zr-tools/upcera"
          element={
            <Layout>
              <UpceraMenu />
            </Layout>
          }
        />

        {/* Меню выбора размера для Upcera Functional */}
        <Route
          path="/zr-tools/upcera/func"
          element={
            <Layout>
              <UpceraSizeMenu type="func" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/upcera/func/14"
          element={
            <Layout>
              <ToolPage toolType="upceraFunc_14" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/upcera/func/16"
          element={
            <Layout>
              <ToolPage toolType="upceraFunc_16" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/upcera/func/18"
          element={
            <Layout>
              <ToolPage toolType="upceraFunc_18" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/upcera/func/20"
          element={
            <Layout>
              <ToolPage toolType="upceraFunc_20" />
            </Layout>
          }
        />
        <Route
          path="/zr-tools/upcera/func/22"
          element={
            <Layout>
              <ToolPage toolType="upceraFunc_22" />
            </Layout>
          }
        />
        {/* Меню выбора размера для Upcera TEST */}
        <Route
          path="/zr-tools/upcera/test"
          element={
            <Layout>
              <UpceraSizeMenu type="test" />
            </Layout>
          }
        />

      </Routes>
    </>
  )

}
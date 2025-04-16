import { BrowserRouter, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import AppProvider from "../context/AppContext";
import { routes } from "../routes";

const RootLayout = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="flex w-screen">
          <Sidebar />

          <div className="flex-1">
            <Header />

            <div className="max-h-[calc(100vh-60px)] overflow-y-scroll bg-primary-2 p-4">
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default RootLayout;

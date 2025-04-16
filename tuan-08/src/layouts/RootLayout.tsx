import { BrowserRouter, Route, Routes } from "react-router";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Overview from "../components/Overview";
import AppProvider from "../context/AppContext";
import DashboardPage from "../pages/DashboardPage";

const RootLayout = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="flex w-screen">
          <Sidebar />

          <div className="flex-1">
            <Header />

            <Overview />

            <Routes>
              <Route path="/" element={<DashboardPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default RootLayout;

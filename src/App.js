import "./App.css";
import { IoSettingsOutline } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Ecommerce,
  Customers,
  Employees,
  Orders,
  Calendar,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
} from "./pages";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    activeMenu,
    setActiveMenu,
    themeSettings,
    setThemeSettings,
    activeThemeColor,
    currentMode
  } = useStateContext();

  const handleThemeSettings = () => {
    setThemeSettings(!themeSettings);
    setActiveMenu(false);
  };

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Setting Tooltip */}
          <div className="fixed bottom-4 right-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className=" text-3xl text-gray-50 p-2 rounded-full"
                style={{ backgroundColor: `${activeThemeColor}`, zIndex: 1000 }}
                onClick={handleThemeSettings}
              >
                <IoSettingsOutline />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 sidebar fixed bg-white dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}

          {/* Navigation */}
          <div
            className={`bg-main-bg dark:bg-main-dark-bg w-full 
              ${activeMenu ? "md:ml-72" : "flex-1"}`}
          >
            <Navbar />
            {themeSettings && <ThemeSettings />}
            {/* Routes */}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;

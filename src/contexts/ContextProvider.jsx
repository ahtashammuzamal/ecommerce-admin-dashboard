import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeThemeColor, setActiveThemeColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  

  const setMode = (e) => {
    setCurrentMode(e.target.value);
  };


  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        themeSettings,
        setThemeSettings,
        activeThemeColor,
        setActiveThemeColor,
        currentMode,
        setCurrentMode,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

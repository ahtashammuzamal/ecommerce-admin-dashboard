import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummy";
import { BsCheck } from "react-icons/bs";

export const ThemeSettings = () => {
  const {
    setThemeSettings,
    activeThemeColor,
    setActiveThemeColor,
    currentMode,
    setMode,
  } = useStateContext();

  return (
    <div className="bg-half-transparent  md:w-screen fixed top-0 nav-item">
      <div className="float-right w-400 bg-white dark:bg-secondary-dark-bg dark:text-white flex flex-col p-4 gap-4 h-screen">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">Settings</p>
          <TooltipComponent title="Close" position="BottomCenter">
            <button
              type="button"
              className="relative flex items-center justify-center p-4 rounded-full hover:bg-light-gray text-xl dark:hover:bg-gray-600"
              onClick={() => setThemeSettings(false)}
            >
              <MdOutlineCancel className="text-2xl " />
            </button>
          </TooltipComponent>
        </div>
        <div>
          <p className="font-semibold text-xl">Theme Option</p>
          <div className="my-2 flex flex-col gap-2">
            <label htmlFor="light" className="flex gap-4">
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                onChange={setMode}
                checked={currentMode === "Light"}
              />
              <p>Light</p>
            </label>
            <label htmlFor="dark" className="flex gap-4">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                onChange={setMode}
                checked={currentMode === "Dark"}
              />
              <p>Dark</p>
            </label>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-4 items-center mt-2">
            {themeColors.map((themecolor, index) => (
              <TooltipComponent
                key={index}
                title={themecolor.name}
                position="topCenter"
              >
                <button
                  className="rounded-full p-5 flex justify-center items-center"
                  style={{ backgroundColor: `${themecolor.color}` }}
                  onClick={() => setActiveThemeColor(themecolor.color)}
                >
                  {activeThemeColor === themecolor.color ? (
                    <BsCheck className=" absolute text-white text-2xl" />
                  ) : (
                    ""
                  )}
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

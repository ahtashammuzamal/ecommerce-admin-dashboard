import { Link, NavLink } from "react-router-dom";
import { FaShopware } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

export const Sidebar = () => {
  const { activeMenu, setActiveMenu, activeThemeColor } = useStateContext();
  const activeLink = `flex items-center gap-6 text-gray-700 mb-4 p-3 rounded-2xl text-white`;
  const defaultLink =
    "flex items-center gap-6 text-gray-700 mb-4 p-3 rounded-2xl dark:text-gray-200 dark:hover:bg-gray-600";

  const handleNavlinkClick = () => {
    if (window.innerWidth < 768) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="bg-main-bg dark:bg-main-dark-bg h-screen pl-8 pb-16 pt-4 pr-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-xl font-bold dark:text-gray-200"
          onClick={() => setActiveMenu(false)}
        >
          <FaShopware />
          <span>StorePilot</span>
        </Link>
        <TooltipComponent position="BottomCenter" content="Close">
          <button
            className="text-3xl dark:text-gray-200"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <IoCloseCircleOutline />
          </button>
        </TooltipComponent>
      </div>

      {links.map((item) => (
        <div className="mb-4" key={item.title}>
          <p className="uppercase text-gray-400 mb-4">{item.title}</p>
          <div className="pl-4">
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
                style={({ isActive }) =>
                  isActive ? { backgroundColor: activeThemeColor } : {}
                }
                onClick={handleNavlinkClick}
              >
                {link.icon}
                <p className="capitalize">{link.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

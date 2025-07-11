import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { IoCartOutline } from "react-icons/io5";
import { IoChatboxOutline, IoSearch } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { useStateContext } from "../contexts/ContextProvider";


export const Navbar = () => {

  const {activeMenu, setActiveMenu, activeThemeColor} = useStateContext()



  const handleNavClick = (value) => {
    console.log(value)
  }

  const NavButton = ({title, color, dotColor, icon, navClick}) => {
      return(
        <TooltipComponent title={title} position="BottomCenter">
          <button 
            type="button" 
            className="relative flex items-center justify-center p-4 rounded-full hover:bg-light-gray text-xl"
            style={{color}}
            onClick={navClick}
          >
            {icon}
            <span 
              className="absolute right-2 top-2 w-2 h-2 rounded-full" 
              style={{backgroundColor: dotColor}}></span>
          </button>
        </TooltipComponent>
      )
  }

  return (
    <div className="flex justify-between items-center md:px-8 py-4 ">
        <div className="flex gap-4">
          <NavButton 
            title= 'Menu' 
            color={activeThemeColor}
            icon={<LuMenu/>}
            navClick = {() => setActiveMenu(prevMenu => !prevMenu)}
          />
          <NavButton 
            title= 'Menu' 
            color={activeThemeColor}
            icon={<IoSearch/>} 
            navClick = {() => handleNavClick('menu')}
          />
        </div>
        <div className="flex gap-4 ">
          <NavButton 
            title= 'Menu' 
            color={activeThemeColor}
            icon={<IoCartOutline/>} 
            navClick = {() => handleNavClick('menu')}
          />
          <NavButton 
            title= 'Menu' 
            color={activeThemeColor} 
            icon={<IoChatboxOutline/>} 
            dotColor={activeThemeColor} 
            navClick = {() => handleNavClick('menu')}
          />
          <NavButton 
            title= 'Menu' 
            color={activeThemeColor} 
            icon={<RiNotification3Line/>} 
            dotColor={activeThemeColor}
            navClick = {() => handleNavClick('menu')}
          />
        </div>
    </div>
  )
}
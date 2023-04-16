import logo from "../assets/image/mclaren_logo.png"
import { HiOutlineMenuAlt4 } from "react-icons/hi"

const Navbar = ({ sidebarState, toggleSidebar }) => {
  return (
    <nav className="fixed z-50 w-full text-white bg-black/30 backdrop-blur-sm">
      <div className="container relative flex items-center justify-between px-0 py-2">
        <div onClick={() => toggleSidebar(!sidebarState)}>
          <HiOutlineMenuAlt4 className="text-[22px] cursor-pointer hover:text-gray-500 transition duration-300" />
        </div>
        <img
          src={logo}
          alt="mclaren logo"
          className="h-1.5 absolute left-1/2 -translate-x-1/2 cursor-pointer"
        />
        <div className="text-[14px] select-none py-[5px] uppercase px-2 rounded-full bg-gray-100/10 cursor-pointer hover:bg-black/20 transition duration-300">
          configurator
        </div>
      </div>
    </nav>
  )
}
export default Navbar

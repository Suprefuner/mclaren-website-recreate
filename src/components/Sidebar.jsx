import { useState, forwardRef, useImperativeHandle } from "react"
import { navLinks, socialMediaLinks } from "../data"
import { IoMdClose } from "react-icons/io"

const Sidebar = forwardRef((_, ref) => {
  const [showSidebar, setShowSidebar] = useState(false)

  useImperativeHandle(ref, () => ({
    sidebarState: showSidebar,
    toggleSidebar: (val) => setShowSidebar(val),
  }))

  return (
    <div
      className={`bg-black/40 h-screen w-[35vw] fixed top-0 z-50 backdrop-blur-md px-5 pb-5 flex flex-col gap-2 text-white capitalize transition-all duration-1000 ${
        showSidebar ? "left-0 opacity-100" : "-left-[100%] opacity-0"
      }`}
    >
      <div className="py-3 text-xl cursor-pointer">
        <IoMdClose
          className="transition duration-300 hover:text-gray-400"
          onClick={() => setShowSidebar((prev) => !prev)}
        />
      </div>
      <ul className="text-xl">
        {navLinks.map(({ link }, i) => (
          <li key={i} className="py-1.5 text-[18px]">
            {link}
          </li>
        ))}
      </ul>
      <ul className="mt-auto text-[14px]">
        <li>enquiry</li>
        <li>find a dealer</li>
      </ul>
      <ul className="flex gap-2 text-xl text-gray-400 ">
        {Object.values(socialMediaLinks).map(({ icon, url }, i) => (
          <li key={i}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </div>
  )
})
export default Sidebar

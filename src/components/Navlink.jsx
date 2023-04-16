import { useState, useEffect } from "react"
import Sublinks from "./Sublinks"
import { AiOutlinePlus } from "react-icons/ai"

const Navlink = ({ navlink }) => {
  const [showSublinks, setShowSublinks] = useState(false)
  const { link, sublinks } = navlink

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setShowSublinks(true)
    }
  }, [window.innerWidth])

  const handleClick = () => {
    if (window.innerWidth >= 1024) return
    setShowSublinks((prev) => !prev)
  }

  return (
    <li className="pt-2 pb-3 relative">
      <div className="relative cursor-pointer lg:hidden" onClick={handleClick}>
        <div href="#">{link}</div>
        <AiOutlinePlus className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none lg:hidden" />
      </div>
      <Sublinks sublinks={sublinks} showSublinks={showSublinks} />
    </li>
  )
}
export default Navlink

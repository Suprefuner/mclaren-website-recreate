import { useState, useEffect } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import Sublinks from "./Sublinks"

const Navlink = ({ navlink }) => {
  const [showSublinks, setShowSublinks] = useState(true)
  const { link, sublinks } = navlink

  /*
  ==================================================
  handle the window resize with debounce
  ==================================================
  */
  useEffect(() => {
    let requestId = null

    const handleResize = () => {
      if (requestId) return

      requestId = requestAnimationFrame(() => {
        setShowSublinks(window.innerWidth > 1024)
        requestId = null
      })
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [window.innerWidth])

  const handleClick = () => {
    if (window.innerWidth >= 1024) return
    setShowSublinks((prev) => !prev)
  }

  const iconStyle = "absolute top-1/2 right-0 -translate-y-1/2 transition-all"

  return (
    <li className="relative pt-2 pb-3">
      <div className="relative cursor-pointer lg:hidden" onClick={handleClick}>
        <div href="#">{link}</div>
        <div className={``}>
          <AiOutlinePlus
            className={`${iconStyle} ${
              showSublinks ? "opacity-0 rotate-90" : "opacity-1 rotate-0"
            }`}
          />
          <AiOutlineMinus
            className={`${iconStyle} ${
              showSublinks ? "opacity-1 rotate-180" : "opacity-0 rotate-90"
            }`}
          />
        </div>
      </div>
      <Sublinks sublinks={sublinks} showSublinks={showSublinks} />
    </li>
  )
}
export default Navlink

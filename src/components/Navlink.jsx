import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sublinks from "./Sublinks"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Navlink = ({ navlink }) => {
  const [showSublinks, setShowSublinks] = useState(false)
  const { link, sublinks } = navlink

  useEffect(() => {
    window.innerWidth < 1024 && setShowSublinks(true)
  }, [window.innerWidth])

  const handleClick = () => {
    if (window.innerWidth >= 1024) return
    setShowSublinks((prev) => !prev)
  }

  return (
    <li className="relative pt-2 pb-3">
      <div className="relative cursor-pointer lg:hidden" onClick={handleClick}>
        <div href="#">{link}</div>
        <AnimatePresence mode="wait">
          {showSublinks ? (
            <motion.div
              initial={{ width: "min", opacity: 0, rotate: "65deg" }}
              animate={{ width: "min", opacity: 1, rotate: 0 }}
              exit={{ width: "min", opacity: 0, rotate: "45deg" }}
              className="absolute right-0 origin-center -translate-y-1/2 pointer-events-none top-1/2 w-min lg:hidden"
            >
              <AiOutlinePlus className="" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ width: "min", opacity: 0, rotate: "45deg" }}
              animate={{ width: "min", opacity: 1, rotate: 0 }}
              exit={{ width: "min", opacity: 0, rotate: "45deg" }}
              className="absolute right-0 origin-center -translate-y-1/2 pointer-events-none top-1/2 w-min lg:hidden"
            >
              <AiOutlineMinus />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Sublinks sublinks={sublinks} showSublinks={showSublinks} />
    </li>
  )
}
export default Navlink

import { useState, forwardRef, useImperativeHandle } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"

import { SidebarListItem } from ".."
import { navLinks, socialMediaLinks } from "../../data"
import useResize from "../../hooks/useResize"

const Sidebar = forwardRef((_, ref) => {
  const [currentHover, setCurrentHover] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const { windowWidth } = useResize()
  /*
  ========================================================
  * pass state and setState function to parent component
  ========================================================
  */
  useImperativeHandle(ref, () => ({
    sidebarState: showSidebar,
    toggleSidebar: (val) => setShowSidebar(val),
  }))

  /*
  ========================================================
  * FRAMER MOTION VARIANTS
  ========================================================
  */
  const containerVariant = {
    hide: {
      x: "-100%",
      transition: {
        ease: "linear",
        staggerDirection: -1,
        staggerChildren: 1,
        duration: 0.2,
      },
    },
    show: {
      x: 0,
      width: windowWidth <= 1024 ? "100vw" : showSubmenu ? "48vw" : "35vw",
      transition: {
        ease: "linear",
        delayChildren: 1,
        staggerChildren: 0.4,
        duration: 0.2,
      },
    },
    exit: {
      x: "-100%",
      transition: {
        staggerDirection: -1,
        delayChildren: 0.4,
        staggerChildren: 1,
      },
    },
  }

  const itemVariant = {
    hide: {
      x: -50,
      opacity: 0,
      blur: 5,
    },
    show: {
      x: 0,
      opacity: 1,
      blur: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    exit: {
      x: -50,
      opacity: 0,
      blur: 5,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  }

  const subMenuVariant = {
    hide: {
      opacity: 0,
      filter: "blur(5px)",
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      filter: "blur(0)",
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, filter: "blur(5px)" },
  }

  //========================================================

  return (
    <motion.div
      variants={containerVariant}
      initial="hide"
      animate={showSidebar ? "show" : "hide"}
      exit="exit"
      className={`
      fixed top-0 z-50
      flex flex-col
      h-screen px-5 pb-5
      bg-black/40 backdrop-blur-md 
      text-white capitalize duration-1000 
      `}
    >
      <motion.div
        variants={itemVariant}
        onMouseOver={() => {
          setCurrentHover("")
          setShowSubmenu(false)
        }}
        className="py-3 text-xl cursor-pointer"
      >
        <IoMdClose
          className="transition duration-300 hover:text-gray-400"
          onClick={() => setShowSidebar(false)}
        />
      </motion.div>
      <motion.div
        variants={itemVariant}
        className="flex flex-col w-full h-full gap-2 "
      >
        <div className="relative w-[20vw]">
          <ul className="text-xl ">
            {navLinks.map(({ link, sublinks }, i) => (
              <SidebarListItem
                key={i}
                link={link}
                sublinks={sublinks}
                setCurrentHover={setCurrentHover}
                setShowSubmenu={setShowSubmenu}
              />
            ))}
            <SidebarListItem
              link="contact"
              setCurrentHover={setCurrentHover}
              setShowSubmenu={setShowSubmenu}
            />
          </ul>
          <AnimatePresence>
            {showSubmenu ? (
              <motion.ul
                key={currentHover}
                variants={subMenuVariant}
                className={`absolute top-0 right-0 pr-10 translate-x-[115%] opacity-0 transition blur-[5px]`}
              >
                {navLinks
                  .filter((link) => link.link === currentHover)[0]
                  .sublinks.map((link, i) => (
                    <li
                      key={i}
                      className="py-1.5 text-[1.8rem] select-none cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
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
      </motion.div>
    </motion.div>
  )
})
export default Sidebar

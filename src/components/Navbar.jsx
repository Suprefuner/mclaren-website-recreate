import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../assets/image/mclaren_logo.png"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import useSnap from "../hooks/useSnap"

const Navbar = ({ sidebarState, toggleSidebar }) => {
  const snap = useSnap()

  const containerVariant = {
    hide: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 1,
        duration: 0.5,
        ease: "easeOut",
        delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  }

  const itemVariant = {
    hide: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        opacity: {
          delay: 1.6,
          duration: 0.6,
        },
        y: {
          duration: 0.6,
        },
      },
    },
  }

  return (
    <motion.nav
      variants={containerVariant}
      initial="hide"
      animate="show"
      exit="exit"
      className={`fixed z-50 w-full h-[6.5rem] text-white bg-black/30 backdrop-blur-sm transition-all
      ${snap.showNavbar ? "top-0" : "-top-[6.5rem]"}`}
    >
      <motion.div className="relative flex items-center justify-between px-3 h-full sm:px-5 2xl:px-[15rem] overflow-hidden">
        <motion.div
          variants={itemVariant}
          onClick={() => toggleSidebar(!sidebarState)}
        >
          <HiOutlineMenuAlt4 className="text-[22px] cursor-pointer hover:text-gray-500 transition duration-300" />
        </motion.div>
        <motion.div variants={itemVariant} className="absolute left-1/2">
          <Link to="/" className="inline-block -translate-x-1/2">
            <img
              src={logo}
              alt="mclaren logo"
              className="h-1.5 cursor-pointer"
            />
          </Link>
        </motion.div>
        <motion.div variants={itemVariant}>
          <Link
            to={`/configure/${snap.currentModel}`}
            className="text-[14px] select-none py-[5px] uppercase px-2 rounded-full bg-gray-100/10 cursor-pointer hover:bg-black/20 transition duration-300"
          >
            configurator
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}
export default Navbar

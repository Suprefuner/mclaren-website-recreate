import { motion } from "framer-motion"
import logo from "../assets/image/mclaren_logo.png"

const containerVariant = {
  exit: {
    opacity: 0,
    y: "-150px",
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeIn",
    },
  },
}

const itemVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 1 },
  },
}

export default function Loader({ setIsLoading }) {
  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid w-screen h-screen bg-black place-content-center"
    >
      <motion.img
        variants={itemVariant}
        onAnimationComplete={() => setIsLoading(false)}
        src={logo}
        alt="McLaren Logo"
        className="w-[20vw]"
      />
    </motion.div>
  )
}

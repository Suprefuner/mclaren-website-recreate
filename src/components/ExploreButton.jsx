import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const ExploreButton = ({ position, model, text = "explore" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <motion.div
      whileHover={{
        x: 5,
        backgroundColor: "rgba(0,0,0,.8)",
      }}
      className={`uppercase w-max bg-black/50 backdrop-blur-sm px-3 py-1 cursor-pointer
      ${position === "right" ? "ml-auto" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={model} className="flex items-center gap-1 ">
        <span>{text}</span>
        <motion.div
          variants={{
            hover: {
              x: 5,
              transition: {
                type: "tween",
                duration: 0.7,
                repeat: Infinity,
                repeatType: "mirror",
              },
            },
          }}
          animate={isHovered ? "hover" : ""}
          transition={{ duration: 0.5 }}
        >
          <HiOutlineArrowNarrowRight className="text-current -mt-0.5" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
export default ExploreButton

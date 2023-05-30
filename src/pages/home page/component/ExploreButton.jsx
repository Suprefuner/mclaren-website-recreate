import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const ExploreButton = ({ position, model, text = "explore" }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <div
      className={`
      w-max px-3 py-1 
      uppercase bg-black/50 backdrop-blur-sm cursor-pointer
      hover:translate-x-[5px]
      hover:bg-black/80
      transition duration-300
      ${position === "right" ? "ml-auto" : ""}
      }
      `}
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
    </div>
  )
}
export default ExploreButton

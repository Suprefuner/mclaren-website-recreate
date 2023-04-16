import { useState, useEffect, forwardRef } from "react"
import { motion } from "framer-motion"

const DragCursor = forwardRef((_, ref) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate="default"
      transition={{ type: "tween" }}
      className="fixed top-0 left-0 w-10 leading-[10rem] text-center text-white bg-black/80 rounded-full aspect-square"
    >
      DragCursor
    </motion.div>
  )
})
export default DragCursor

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import DragCursor from "./DragCursor"

const ModelSection = () => {
  const [showCursor, setShowCursor] = useState(false)
  const MotionDragCursor = motion(DragCursor)

  return (
    <section
      className="relative z-10 h-screen bg-gray-400"
      onMouseOver={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      <AnimatePresence>
        {showCursor ? (
          <MotionDragCursor
            key="cursor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          />
        ) : null}
      </AnimatePresence>
      <h2>ModelSection</h2>
    </section>
  )
}
export default ModelSection

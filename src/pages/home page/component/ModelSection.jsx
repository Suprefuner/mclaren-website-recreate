import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

import DragCursor from "./DragCursor"
import ExploreButton from "./ExploreButton"
import ModelSectionModelImage from "./ModelSectionModelImage"

import { modelData } from "../../../data"
import useSnap from "../../../hooks/useSnap"

const ModelSection = () => {
  const [showCursor, setShowCursor] = useState(false)
  const containerRef = useRef(null)
  const snap = useSnap()

  return (
    <section
      className={`${showCursor ? "cursor-none" : "cursor-auto"}
      relative z-[15] h-screen 
      bg-gradient-radial from-gray-600 to-gray-800 
      overflow-hidden text-gray-300`}
      onMouseOver={(e) =>
        setShowCursor(e.target.closest("button") ? false : true)
      }
      onMouseLeave={() => setShowCursor(false)}
    >
      <div className="relative h-full wrapper" ref={containerRef}>
        <AnimatePresence mode="wait">
          <motion.div className="relative z-10 pt-10 mx-auto text-center select-none w-max">
            <motion.p className="capitalize text-md">
              {modelData[snap.currentModel]?.slogan || "slogan"}
            </motion.p>
            <motion.h3 className="mt-3 mb-2 text-5xl uppercase">
              {snap.currentModel}
            </motion.h3>
            <motion.div
              className="
              flex flex-col gap-2 
              items-center justify-center 
              sm:flex-row sm:gap-5
              "
            >
              <ExploreButton model={snap.currentModel} />
              <ExploreButton
                text="configure"
                model={`configure/${snap.currentModel}`}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="flex items-center w-[240vw] h-full px-[15vw] absolute inset-0"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.1}
          dragMomentum={true}
        >
          {Object.keys(modelData).map((model, i) => (
            <ModelSectionModelImage
              key={i}
              name={modelData[model].name}
              image={modelData[model].homePageModelImage}
            />
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {showCursor ? (
          <motion.div
            key="cursor"
            variants={{
              hide: { opacity: 0 },
              show: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="hide"
            animate="show"
            exit="exit"
            className="relative z-20"
          >
            <DragCursor />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
export default ModelSection

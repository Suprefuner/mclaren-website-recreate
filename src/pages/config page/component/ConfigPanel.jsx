import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { configColor } from "../../../data"
import useSnap from "../../../hooks/useSnap"

export default function ConfigPanel({ dragContainer }) {
  const [windowWidth, setWindowWidth] = useState(0)
  const [currentConfig, setCurrentConfig] = useState("body")
  const snap = useSnap()

  useEffect(() => {
    let requestId = null

    const handleResize = () => {
      if (requestId) return
      requestId = requestAnimationFrame(() => {
        setWindowWidth(window.innerWidth)
        requestId = null
      })
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    console.log({ windowWidth })
  }, [windowWidth])

  return (
    <motion.div
      layout
      drag={windowWidth > 600}
      dragMomentum={false}
      dragElastic={1}
      dragConstraints={dragContainer}
      className="
      w-full sm:max-w-[40rem]
      bg-white/50 backdrop-blur-md
      absolute bottom-0 right-0 z-[1000]
      border border-white rounded-[3rem] 
      shadow-[inset_0_8rem_0px_0_white]
    "
    >
      <motion.div
        layout
        className="
        flex h-[8rem] items-center justify-center gap-3 
        rounded-t-[3rem] md:bg-transparent px-2"
      >
        {["body", "interior"].map((config, i) => (
          <motion.div
            layout
            key={i}
            className={`
          relative rounded-full
          px-4 py-0.5 text-center uppercase border tracking-wider select-none cursor-pointer
          ${currentConfig === config ? "text-white" : ""}
          `}
            onClick={() => setCurrentConfig(config)}
          >
            <span>{config}</span>
            {currentConfig === config ? (
              <motion.div
                layoutId="bg-color"
                className="absolute inset-0 bg-gray-700 rounded-full -z-10 "
              />
            ) : null}
          </motion.div>
        ))}
      </motion.div>
      <div className=" rounded-[3rem] p-3">
        <motion.div
          layout
          className="grid grid-cols-5 gap-1 p-2 bg-white rounded-[2rem] "
        >
          {/* <AnimatePresence mode="wait"> */}
          <AnimatePresence>
            {configColor[currentConfig].map((color, i) => (
              <motion.div
                layout
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`w-4 rounded-full aspect-square border-2
            bg-gradient-to-br from-black/20 via-transparent to-black/80 cursor-pointer justify-self-center brightness-110`}
                style={{ backgroundColor: color }}
                onClick={() => {
                  snap.config[currentConfig].material.color.set(color)
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

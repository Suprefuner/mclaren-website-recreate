import { motion } from "framer-motion"
import CanvasModel from "../canvas"
import useSnap from "../hooks/useSnap"
import { modelData } from "../data"

const ModelPageCustomSection = () => {
  const snap = useSnap()

  const containerVariant = {
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariant = {
    hide: {
      y: "100%",
    },
    show: {
      y: 0,
      transition: {
        type: "tween",
      },
    },
  }

  return (
    <section className="relative h-screen bg-gradient-radial from-gray-800 to-black">
      <motion.h1
        variants={containerVariant}
        initial="hide"
        whileInView="show"
        className="text-[12rem] absolute top-1/2 -translate-y-[120%] uppercase px-5 leading-[12rem] text-white lg:left-10"
      >
        <div className="overflow-hidden">
          <motion.div
            variants={itemVariant}
            viewport={{ margin: "100px 0px 0px 0px" }}
          >
            style your
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={itemVariant}
            viewport={{ margin: "100px 0px 0px 0px" }}
          >
            McLaren
          </motion.div>
        </div>
      </motion.h1>
      <CanvasModel model={modelData[snap.currentModel].name} />
    </section>
  )
}
export default ModelPageCustomSection

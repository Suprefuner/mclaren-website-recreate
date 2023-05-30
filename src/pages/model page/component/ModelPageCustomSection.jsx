import { Suspense } from "react"
import { motion } from "framer-motion"
import CanvasModel from "../../../components/canvas"
import useSnap from "../../../hooks/useSnap"
import { modelData } from "../../../data"

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
        className="
          absolute top-[15vh] lg:left-10 
          px-5 text-white uppercase 
          text-[4.5rem] xs:text-[6rem] md:text-[8rem] lg:text-[12rem] 
          md:leading-[12rem]"
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
      <Suspense fallback={null}>
        <CanvasModel model={modelData[snap.currentModel].name} />
      </Suspense>
    </section>
  )
}
export default ModelPageCustomSection

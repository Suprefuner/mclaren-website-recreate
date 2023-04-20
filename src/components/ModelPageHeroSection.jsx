import { motion, useScroll, useTransform } from "framer-motion"
import {
  ModelStatsCard,
  ModelPageVideo,
  ModelPageStatsList,
  ModelPageSwiper,
} from "./"
import useSnap from "../hooks/useSnap"
import { modelData } from "../data"

const ModelPageHeroSection = () => {
  const snap = useSnap()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const { modelSwiperImages } = modelData[snap.currentModel]

  return (
    <motion.section className="flex items-start justify-between pt-[100vh] relative text-white z-10">
      <motion.div
        className="absolute inset-0 -z-20 bg-black/70 backdrop-blur-2xl"
        style={{ opacity }}
      />

      {/*  ======================================================
        HEADER
      ======================================================*/}
      <div className="absolute z-20 flex items-start justify-between w-full px-5 top-10">
        <motion.h2
          className="text-5xl leading-[10rem] uppercase xs:text-7xl xl:text-8xl font-header"
          style={{
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "transparent",
          }}
        >
          <motion.span
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.5,
            }}
            className="inline-block"
          >
            McLaren
          </motion.span>
          <br />
          <motion.span
            initial={{
              x: 300,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              WebkitTextStroke: "0px",
              WebkitTextFillColor: "rgba(255,255,255,.8)",
            }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.5,
            }}
            className="inline-block"
          >
            {snap.currentModel}
          </motion.span>
        </motion.h2>
        <ModelStatsCard />
      </div>

      <div className="w-full space-y-8 overflow-x-hidden text-5xl">
        <ModelPageVideo />
        <div className="px-0 sm:px-3 lg:px-5">
          <ModelPageStatsList />
        </div>
        <ModelPageSwiper images={modelSwiperImages} slidesPerView={1.2} />
      </div>
    </motion.section>
  )
}
export default ModelPageHeroSection

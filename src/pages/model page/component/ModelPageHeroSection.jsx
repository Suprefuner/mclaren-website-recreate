import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import ModelStatsCard from "./ModelStatsCard"
import ModelPageVideo from "./ModelPageVideo"
import ModelPageStatsList from "./ModelPageStatsList"
import ModelPageSwiper from "./ModelPageSwiper"

import useSnap from "../../../hooks/useSnap"
import { modelData } from "../../../data"

const ModelPageHeroSection = () => {
  const snap = useSnap()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  let renderCount = useRef(0)

  useEffect(() => {
    if (renderCount) return
    renderCount.current++
  }, [])

  const { modelSwiperImages } = modelData[snap.currentModel]

  const brandVariant = {
    hide: { x: -300, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: !renderCount ? 2 : 0,
      },
    },
  }

  const modelNameVariant = {
    hide: {
      x: 300,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    show: {
      x: 0,
      opacity: 1,
      WebkitTextStroke: "1px",
      WebkitTextFillColor: "rgba(255,255,255,.8)",
      transition: {
        type: "tween",
        duration: 1,
        delay: !renderCount ? 2 : 0,
      },
    },
  }

  return (
    <motion.section className="flex items-start justify-between pt-[100vh] relative text-white z-10">
      <motion.div
        className="absolute inset-0 -z-20 bg-black/70 backdrop-blur-2xl"
        style={{ opacity }}
      />

      {/*  ======================================================
        HEADER
      ======================================================*/}
      <div
        className="
        absolute top-10 z-20 
        flex items-start justify-between 
        w-full px-3 xs:px-5"
      >
        <h2
          className="
          uppercase font-header leading-[5rem] 
          xs:leading-[7.5rem] sm:leading-[10rem]
          text-4xl xs:text-5xl sm:text-7xl xl:text-8xl "
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,.8)",
            WebkitTextFillColor: "transparent",
          }}
        >
          <motion.span
            variants={brandVariant}
            initial="hide"
            animate="show"
            className="inline-block"
          >
            McLaren
          </motion.span>
          <br />
          <motion.span
            key={snap.currentModel}
            variants={modelNameVariant}
            initial="hide"
            animate="show"
            className="inline-block"
          >
            {snap.currentModel}
          </motion.span>
        </h2>
        <div className="hidden lg:block">
          <ModelStatsCard />
        </div>
      </div>

      <div className="w-full space-y-8 overflow-x-hidden text-5xl">
        <div className="w-full">
          <ModelPageVideo />
        </div>
        <div className="px-0 sm:px-3 lg:px-5">
          <ModelPageStatsList />
        </div>
        <ModelPageSwiper images={modelSwiperImages} slidesPerView={1.2} />
      </div>
    </motion.section>
  )
}
export default ModelPageHeroSection

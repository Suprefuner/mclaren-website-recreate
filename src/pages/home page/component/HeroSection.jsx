import { useRef } from "react"
import { motion } from "framer-motion"

import { modelData } from "../../../data"
import { AnimatedLetters } from "../../../components"
import ExploreButton from "./ExploreButton"

const HeroSection = () => {
  const campaignModel = Object.keys(modelData)[0]
  const campaignModelObject = modelData[campaignModel]
  const { homePageHeroImage, homePageHeroImageMobile, name } =
    campaignModelObject
  const coverRef = useRef(null)

  return (
    <section className="relative z-20 h-screen px-5">
      <picture className="absolute inset-0">
        {campaignModelObject?.homePageHeroImageMobile && (
          <>
            <source
              srcSet={homePageHeroImageMobile}
              media="(max-width:1024px)"
            />
            <img
              srcSet={homePageHeroImage}
              alt={`McLAREN ${name} photo`}
              className="w-full h-full object-cover"
            />
          </>
        )}
      </picture>
      <motion.div
        ref={coverRef}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        onAnimationComplete={() => coverRef.current.remove()}
        className="absolute inset-0 bg-black"
      />
      <div className="container relative w-full h-full">
        {/* 
        =================================================
        DESKTOP TITLE ANIMATION
        =================================================
        */}
        <div className="absolute right-0 text-white bottom-8 hidden md:block">
          <h2
            className="
              text-6xl 
              md:text-7xl
              lg:text-[9.5rem] 
              uppercase 
              font-header
            "
          >
            <AnimatedLetters title={`McLaren ${name}`} />
          </h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.3 }}
          >
            <ExploreButton position={"right"} model={campaignModel} />
          </motion.div>
        </div>
        {/* 
        =================================================
        MOBILE TITLE ANIMATION
        =================================================
        */}
        <div className="flex flex-col h-full items-center pt-[10rem] pb-[5rem] text-white md:hidden ">
          <h2
            className="
            font-header text-white 
            text-3xl xs:text-[4.5rem] 
            text-center uppercase"
          >
            <AnimatedLetters title={`McLaren ${name}`} media="mobile" />
          </h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.3 }}
            className="mt-auto"
          >
            <ExploreButton position={"right"} model={campaignModel} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection

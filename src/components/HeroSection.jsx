import { useRef } from "react"
import { motion } from "framer-motion"
import { modelData } from "../data"
import ExploreButton from "./ExploreButton"
import { AnimatedLetters } from "./"

const HeroSection = () => {
  const campaignModel = Object.keys(modelData)[0]
  const campaignModelObject = modelData[campaignModel]
  const { homePageHeroImage, name } = campaignModelObject
  const coverRef = useRef(null)

  return (
    <section className="relative z-20 h-screen px-5">
      <motion.img
        src={homePageHeroImage}
        alt={`McLAREN ${name} photo`}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <motion.div
        ref={coverRef}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        onAnimationComplete={() => coverRef.current.remove()}
        className="absolute inset-0 bg-black"
      />
      <div className="container relative w-full h-full">
        <div className="absolute right-0 text-white bottom-8">
          <h2 className="text-8xl lg:text-[10rem] 2xl:text-[10rem] uppercase">
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
      </div>
    </section>
  )
}
export default HeroSection

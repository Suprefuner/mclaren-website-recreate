import { motion, useScroll, useTransform } from "framer-motion"
import {
  ModelStatsCard,
  ModelPageVideo,
  ModelPageStatsList,
  ModelPageSwiper,
} from "./"
import useSnap from "../hooks/useSnap"
import img from "../assets/image/mclaren_elva.jpg"
import img2 from "../assets/image/mclaren_720.jpg"

const ModelPageHeroSection = () => {
  const snap = useSnap()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // FIXME
  const tempSwiperImages = [img, img2]

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
          key="header"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
          className="text-5xl font-semibold uppercase xs:text-7xl xl:text-8xl"
        >
          McLaren <br />
          {snap.currentModel}
        </motion.h2>
        <ModelStatsCard />
      </div>

      <div className="w-full space-y-8 overflow-x-hidden text-5xl">
        <ModelPageVideo />
        <div className="px-0 sm:px-3 lg:px-5">
          <ModelPageStatsList />
        </div>
        <ModelPageSwiper images={tempSwiperImages} slidesPerView={1.2} />
      </div>
    </motion.section>
  )
}
export default ModelPageHeroSection

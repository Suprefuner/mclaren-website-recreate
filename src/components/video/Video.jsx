import { useRef } from "react"
import { motion } from "framer-motion"
import ExploreButton from "../../pages/home page/component/ExploreButton"
import AnimatedLetters from "../animation/AnimatedLetters"
import { modelData } from "../../data"

const Video = ({ model }) => {
  const videoRef = useRef(null)
  const imgRef = useRef(null)

  const handleMouseover = () => {
    videoRef.current.currentTime = 0
    videoRef.current.play()
    imgRef.current.style.opacity = 0
  }

  const handleMouseleave = () => {
    videoRef.current.pause()
    imgRef.current.style.opacity = 1
  }

  const { name, description, videoThumbnail, videoUrl, videoThumbnailMobile } =
    modelData[model]

  return (
    <div
      className="relative w-full aspect-square md:h-screen uppercase"
      onMouseOver={handleMouseover}
      onMouseLeave={handleMouseleave}
    >
      {/* <img
        src={videoThumbnail}
        ref={imgRef}
        alt="mclaren video thumbnail"
        className="absolute z-20 object-cover w-full h-full transition duration-150"
      /> */}
      <picture
        ref={imgRef}
        className="absolute z-20 object-cover w-full h-full"
      >
        {videoThumbnailMobile && (
          <source
            srcSet={videoThumbnailMobile}
            media="(max-width:1200px)"
            className="w-full h-full object-cover transition duration-150"
          />
        )}

        <img
          srcSet={videoThumbnail}
          alt="mclaren video thumbnail"
          className="w-full h-full object-cover transition duration-150"
        />
      </picture>
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        className="absolute object-cover w-full h-full "
      />
      <div
        className="
          h-full
          flex flex-col
          p-3  sm:p-5 md:pt-[12rem] 
          relative z-30 
          text-white"
      >
        <h3 className="text-4xl md:text-5xl font-header">
          <AnimatedLetters title={name} />
        </h3>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
              delay: 1.2,
            },
          }}
          viewport={{ once: true }}
          className="hidden xs:block text-[15px] md:text-[18px]"
        >
          {description}
        </motion.p>
        <div className="mt-auto">
          <ExploreButton model={model} />
        </div>
      </div>
    </div>
  )
}
export default Video

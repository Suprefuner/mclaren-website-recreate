import { useRef } from "react"
import { motion } from "framer-motion"
import { ExploreButton, AnimatedLetters } from "./"
import { modelData } from "../data"

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

  const { name, description, videoThumbnail, videoUrl } = modelData[model]

  return (
    <div
      className="relative h-screen uppercase"
      onMouseOver={handleMouseover}
      onMouseLeave={handleMouseleave}
    >
      <img
        src={videoThumbnail}
        ref={imgRef}
        alt="mclaren video thumbnail"
        className="absolute z-20 object-cover w-full h-full transition duration-150"
      />
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        className="absolute object-cover w-full h-full "
      />
      <div className="relative z-30 text-white h-full p-5 pt-[12rem] flex flex-col">
        <h3 className="text-5xl font-semibold">
          <AnimatedLetters title={name} inView={true} />
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
          className=" text-[18px] mb-auto "
        >
          {description}
        </motion.p>
        <ExploreButton model={model} />
      </div>
    </div>
  )
}
export default Video

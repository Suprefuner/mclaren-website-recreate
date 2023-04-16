import { useRef } from "react"
import ExploreButton from "./ExploreButton"

const Video = ({ imgUrl, videoUrl, title, content }) => {
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

  return (
    <div
      className="relative h-screen uppercase"
      onMouseOver={handleMouseover}
      onMouseLeave={handleMouseleave}
    >
      <img
        src={imgUrl}
        ref={imgRef}
        alt="mclaren video thumbnail"
        className="absolute z-20 object-cover w-full h-full transition duration-150"
      />
      <video
        src={videoUrl}
        muted
        loop
        className="absolute object-cover w-full h-full "
        ref={videoRef}
      />
      <div className="relative z-30 text-white h-full p-5 pt-[12rem] flex flex-col">
        <h3 className="font-semibold text-[18px] ">{title}</h3>
        <p className=" text-[18px] mb-auto ">{content}</p>
        <div>
          <ExploreButton />
        </div>
      </div>
    </div>
  )
}
export default Video

import { useState } from "react"
import { BsPlay, BsPlayFill } from "react-icons/bs"

const VideoPreviewButton = () => {
  const [isHovererd, setIsHovererd] = useState(false)
  return (
    <div
      className="
      w-8 aspect-square grid place-content-center bg-white/10 backdrop-blur-sm text-[20px] rounded-full cursor-pointer hover:bg-white/30 duration-200"
      onMouseOver={() => setIsHovererd(true)}
      onMouseLeave={() => setIsHovererd(false)}
    >
      {isHovererd ? <BsPlayFill /> : <BsPlay />}
    </div>
  )
}
export default VideoPreviewButton

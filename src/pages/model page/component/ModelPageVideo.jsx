import { useState, useRef, useCallback, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { IoMdClose } from "react-icons/io"
import { VideoPreviewButton } from "../../../components"
import state from "../../../store"

const ModelPageVideo = () => {
  const [fullScreen, setFullScreen] = useState(false)
  const videoRef = useRef(null)

  const { ref, inView } = useInView({ threshold: 0.98 })

  // prettier-ignore
  const setRefs = useCallback((node) => {
    videoRef.current = node
    ref(node)
  },[ref])

  // prettier-ignore
  useEffect(() => {
    !inView 
    ? videoRef.current.pause() 
    : videoRef.current.play()
  }, [inView])

  return (
    <div
      className={`
        relative 
        ${
          !fullScreen
            ? "h-[45rem] w-full lg:px-5 xl:px-8 mx-auto"
            : "lg:z-[100] lg:w-[100vw] lg:h-screen"
        }
      `}
    >
      <div
        className="
        absolute top-5 left-5 z-[55] cursor-pointer  
        text-[3rem] hover:text-gray-500 transition"
        onClick={() => {
          state.showNavbar = true
          setFullScreen(false)
        }}
      >
        {fullScreen ? <IoMdClose /> : null}
      </div>
      <video
        ref={setRefs}
        src="https://res.cloudinary.com/dytia9net/video/upload/v1681624524/video/Orange_Rush_-_McLaren_720S_Spider_wxei3d.mp4"
        type="video/mp4"
        muted={!fullScreen}
        className="object-cover w-full h-full"
      />
      {!fullScreen ? (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          onClick={() => {
            setFullScreen(true)
            state.showNavbar = false
            if (window.innerWidth >= 1024) videoRef.current.scrollIntoView()
          }}
        >
          <VideoPreviewButton />
        </div>
      ) : null}
    </div>
  )
}
export default ModelPageVideo

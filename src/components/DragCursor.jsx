import { useState, useEffect, useRef } from "react"
import logo from "../assets/image/mclaren_logo_sm.png"

const TestCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const mouseMove = (e) => {
      ref.current.style.left = e.clientX - 50 + "px"
      ref.current.style.top = e.clientY - 50 + "px"
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-10 text-white rounded-full pointer-events-none aspect-square bg-black/20 backdrop-blur-lg backdrop-filter"
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full uppercase opacity-90">
        <img
          src={logo}
          alt=""
          className="w-6 -mt-1 -mb-1.5 aspect-square invert"
        />
        <span>drag</span>
      </div>
    </div>
  )
}
export default TestCursor

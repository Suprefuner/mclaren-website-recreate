import { useEffect, useState } from "react"

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // let requestId = null
    
    const handleResize = () => {
      // if (requestId) return
      // requestId = requestAnimationFrame(() => {
      //   setWindowWidth(window.innerWidth)
      //   requestId = null
      // })
      setWindowWidth(window.innerWidth)
    }

    if (windowWidth === 0) {
      handleResize()
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { windowWidth }
}
export default useResize

import { useEffect, useState } from "react"

const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    let requestId = null

    const handleResize = () => {
      if (requestId) return
      requestId = requestAnimationFrame(() => {
        setWindowWidth(window.innerWidth)
        requestId = null
      })
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { windowWidth }
}
export default useResize

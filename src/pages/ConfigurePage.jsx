import { useEffect, useRef, Suspense } from "react"
import { useParams } from "react-router-dom"
import { modelData } from "../data"
import bg from "../assets/image/config_bg.jpg"
import { ConfigPanel } from "../components"
import CanvasModel from "../canvas"
import state from "../store"
import { ModelLoader } from "../components"

export default function ConfigurePage() {
  const containerRef = useRef(null)
  const { model } = useParams()

  useEffect(() => {
    state.currentModel = model
    state.showFooter = false
    return () => (state.showFooter = true)
  }, [])

  return (
    <main className="relative z-10 overflow-hidden" ref={containerRef}>
      <img
        src={bg}
        alt=""
        className="absolute object-cover w-full h-full -z-20"
      />
      <div className="relative z-10 h-screen">
        <CanvasModel
          model={modelData[model].name}
          autoRotate={false}
          showButton={false}
        />
      </div>
      <ConfigPanel dragContainer={containerRef} />
    </main>
  )
}

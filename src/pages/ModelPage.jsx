import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import {
  ModelPageHeroSection,
  ModelPageDetailSection,
  ModelPageCustomSection,
} from "../components"
import { modelData } from "../data"
import state from "../store"

const ModelPage = () => {
  const { model } = useParams()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    state.currentModel = model
  }, [location])

  const { videoThumbnail } = modelData[model]

  return (
    <main className={`bg-center`}>
      <img
        src={videoThumbnail}
        alt={`${model} photo`}
        className="fixed object-cover w-full h-full"
      />
      <ModelPageHeroSection />
      <ModelPageDetailSection />
      <ModelPageCustomSection />
    </main>
  )
}
export default ModelPage

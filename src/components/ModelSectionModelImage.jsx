import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import state from "../store"

const ModelSectionModelImage = ({ name, image }) => {
  const { ref, inView, entry } = useInView({ threshold: 1 })

  useEffect(() => {
    if (!inView) return
    state.currentModel = entry?.target?.dataset.model
  }, [inView])

  return (
    <img
      ref={ref}
      src={image}
      alt=""
      className="w-[70vw] h-auto object-contain translate-y-[10rem] pointer-events-none drop-shadow-3xl"
      data-model={name}
    />
  )
}
export default ModelSectionModelImage

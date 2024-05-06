import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import state from "../../../store"

const ModelSectionModelImage = ({ name, image }) => {
  const { ref, inView, entry } = useInView({ threshold: 1 })

  useEffect(() => {
    if (!inView) return
    state.currentModel = entry?.target?.querySelector('img').dataset.model
  }, [inView])

  return (
    <div ref={ref} className="w-[70vw] h-[60vh] min-h-[560px]">
      <img
        src={image}
        alt={`McLaren ${name} photo`}
        className="w-full h-full object-contain pointer-events-none drop-shadow-3xl translate-y-4"
        data-model={name}
      />
    </div>
  )
}
export default ModelSectionModelImage

import { useRef } from "react"
import img from "../../assets/image/mclaren_artura.jpg"

const ModelPageGallery = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="w-[400vw] flex">
          <img src={img} alt="" className="w-[100vw]" />
          <img src={img} alt="" className="w-[100vw]" />
          <img src={img} alt="" className="w-[100vw]" />
          <img src={img} alt="" className="w-[100vw]" />
        </div>
      </div>
    </section>
  )
}
export default ModelPageGallery

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import img from "../assets/image/mclaren_artura.jpg"

const ModelPageGallery = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  // gsap.fromTo(
  //   sectionRef.current,
  //   {
  //     translateX: 0,
  //   },
  //   {
  //     translateX: "-300vw",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       start: "top top",
  //       end: "2000 top",
  //       scrub: 0.6,
  //       pin: true,
  //     },
  //   }
  // )

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

import mclarenElva from "../assets/image/mclaren_elva.jpg"
import ExploreButton from "./ExploreButton"

const HeroSection = () => {
  return (
    <section className="relative z-20 h-screen">
      <img
        src={mclarenElva}
        alt="mclaren elva photo"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="container relative w-full h-full">
        <div className="absolute right-0 text-white bottom-8 ">
          <h2 className="text-8xl xl:text-9xl 2xl:text-[10rem] uppercase">
            Mclaren Elva
          </h2>
          <ExploreButton position={"right"} />
        </div>
      </div>
    </section>
  )
}
export default HeroSection

import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const ExploreButton = ({ position }) => {
  return (
    <button
      className={`uppercase flex gap-1 items-center ${
        position === "right" ? "ml-auto" : ""
      }`}
    >
      <span>explore</span>
      <HiOutlineArrowNarrowRight className="text-white -mt-0.5" />
    </button>
  )
}
export default ExploreButton

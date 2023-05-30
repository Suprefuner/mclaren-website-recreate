import { useRef } from "react"
import { useInView } from "framer-motion"
import CountNumber from "./CountNumber"

const ModelPageStatsItem = ({ stat, unit, value }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: "all", once: true })

  return (
    <li
      className="
      relative border-b lg:border-b-0 border-gray-400/50
      pt-2.5 first:pt-0 lg:pt-0 text-center"
    >
      <h4 className="text-[18px] uppercase">
        {stat} <span className="text-gray-400">{unit}</span>
      </h4>
      <div className="text-9xl" ref={ref}>
        <CountNumber from={0} to={value} start={isInView} />
      </div>
    </li>
  )
}
export default ModelPageStatsItem

import ModelPageStatsItem from "./ModelPageStatsItem"
import useSnap from "../../../hooks/useSnap"
import { modelData } from "../../../data"

const ModelPageStatsList = () => {
  const snap = useSnap()
  const { data } = modelData[snap.currentModel]

  return (
    <ul className="relative px-5 lg:grid lg:grid-cols-3 lg:divide-x">
      {Object.keys(data).map((stat, i) => (
        <ModelPageStatsItem key={i} stat={stat} {...data[stat]} />
      ))}
    </ul>
  )
}
export default ModelPageStatsList

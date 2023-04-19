import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { BsChevronDown } from "react-icons/bs"
import { StatsCardProgressbar } from "./"
import img from "../assets/image/mclaren_720.jpg"
import useSnap from "../hooks/useSnap"
import { modelData } from "../data"

const ModelStatsCard = () => {
  const [showDetail, setShowDetail] = useState(false)
  const snap = useSnap()
  const navigate = useNavigate()

  const { data } = modelData[snap.currentModel]

  const toggleDetail = () => setShowDetail((prev) => !prev)

  const handleChangeModel = (model) => navigate(`/${model}`)

  /*
  ================================================
  * FRAMER MOTION VARIANTS
  ================================================
  */
  const containerVariant = {
    hide: { height: 0 },
    show: { height: "auto" },
    exit: { height: 0 },
  }

  const itemVariant = {
    hide: { y: "-100%" },
    show: { y: 0 },
    exit: { y: "-100%" },
  }

  return (
    <div className="hidden lg:block text-white bg-black/50 backdrop-blur-md w-[55rem]">
      <div className="flex items-center justify-between">
        <ul className="flex text-[1.8rem]">
          {Object.keys(modelData).map((model, i) => (
            <li
              key={i}
              className="relative px-3 py-[1.3rem] uppercase cursor-pointer"
              onClick={() => handleChangeModel(model)}
            >
              <span>{model}</span>
              {model === snap.currentModel ? (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 h-[3px] w-full bg-white"
                />
              ) : null}
            </li>
          ))}
        </ul>
        <div className="p-2 border-l cursor-pointer" onClick={toggleDetail}>
          <motion.div animate={{ rotate: showDetail ? 180 : 0 }}>
            <BsChevronDown />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showDetail ? (
          <motion.div
            variants={containerVariant}
            initial="hide"
            animate="show"
            exit="exit"
            className="overflow-hidden"
          >
            <motion.div variants={itemVariant} transition={{ type: "tween" }}>
              <img src={img} alt="" />
              <div className="p-2 space-y-1 uppercase">
                {Object.entries(data).map((stats, i) => (
                  <StatsCardProgressbar key={i} stats={stats} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
export default ModelStatsCard

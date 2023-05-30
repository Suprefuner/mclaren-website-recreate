import { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import { motion } from "framer-motion-3d"
import useSnap from "../../hooks/useSnap"
import state from "../../store"

const Model = ({ model }) => {
  const groupRef = useRef(null)
  const snap = useSnap()

  const { scene, materials } = useGLTF(model)

  useEffect(() => {
    if (!materials) return
    if (snap.currentModel === "elva") {
      state.config.body.material = materials.HDMC_Silver_Gray_Carpaint
      state.config.interior.material = materials.brown_leather
    }
    if (snap.currentModel === "artura") {
      state.config.body.material = materials.Carpaint
      state.config.interior.material = ""
    }
    if (snap.currentModel === "720S") {
      state.config.body.material = materials.Primary_Paint
      state.config.interior.material = materials.Grille_6
    }
  }, [])

  const stateString = JSON.stringify(snap)

  return (
    <motion.group ref={groupRef} key={stateString}>
      <primitive object={scene} />
    </motion.group>
  )
}
export default Model

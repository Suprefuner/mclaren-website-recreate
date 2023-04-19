import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import useSnap from "../hooks/useSnap"

const CameraRig = ({ children }) => {
  const groupRef = useRef(null)
  const snap = useSnap()

  useFrame((state, delta) => {
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })

  return <group ref={groupRef}>{children}</group>
}
export default CameraRig

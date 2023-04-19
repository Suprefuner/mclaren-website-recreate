import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  Center,
  Html,
  useCursor,
} from "@react-three/drei"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Model from "./Model"
import { modelData } from "../data"

const CanvasModel = ({ autoRotate = true, model, showButton = true }) => {
  const { modelUrl, camera, name } = modelData[model]
  const navigate = useNavigate()

  return (
    <section className="relative h-full">
      <Canvas
        camera={{ position: [1, 1, 4] }}
        gl={{ preserveDrawingBuffer: true }}
        className="bg-transparent pointer-events-none"
      >
        {showButton ? (
          <Html fullscreen>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
              }}
              viewport={{
                amount: "all",
                margin: "100px 0px 0px 0px",
              }}
              className="
              grid place-content-center
              absolute top-[32vh] right-[22vw] -translate-x-1/2
              w-[15rem] aspect-square bg-white/90 rounded-full
              text-xl font-semibold capitalize cursor-pointer
              border border-white
              "
              style={{
                boxShadow: "inset -5px 5px 1rem -0.2rem rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => navigate(`/configure/${name}`)}
            >
              custom
            </motion.div>
          </Html>
        ) : null}

        <ambientLight intensity={0.5} />
        <directionalLight position={[-1, 8, 5]} intensity={2} />

        <Environment preset="city" />
        <Center>
          <Model model={modelUrl} />
        </Center>
        <OrbitControls
          autoRotate={autoRotate}
          enablePan={false}
          enableRotate={!autoRotate}
          enableZoom={!autoRotate}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 2}
          minDistance={0.5}
          maxDistance={3.5}
        />
      </Canvas>
    </section>
  )
}
export default CanvasModel

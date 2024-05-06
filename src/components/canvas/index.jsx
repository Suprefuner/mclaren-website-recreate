import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Center, Html } from "@react-three/drei"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import ModelLoader from "../../pages/config page/component/ModelLoader"
import Model from "./Model"
import { modelData } from "../../data"

const CanvasModel = ({ autoRotate = true, model, showButton = true }) => {
  const { modelUrl, name } = modelData[model]
  const navigate = useNavigate()

  return (
    <section className="relative h-full">
      <Canvas
        camera={{ position: [1, 1, 4] }}
        gl={{ preserveDrawingBuffer: true }}
        className="bg-transparent pointer-events-none"
      >
        <Suspense fallback={<ModelLoader />}>
          {showButton ? (
            <Html fullscreen>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 0.5,
                  },
                }}
                whileHover={{
                  scale: 1.1
                }}
                viewport={{
                  once: true
                }}
                className="
                  grid place-content-center
                  absolute top-[32vh] right-[22vw] -translate-x-1/2
                  w-[15rem] aspect-square bg-black/90 rounded-full
                  text-xl text-white font-semibold uppercase 
                  border border-gray-800 cursor-pointer hover:scale-110"
                style={{ boxShadow: "inset -5px 5px 1rem -0.2rem rgba(255, 255, 255, 0.1)" }}
                onClick={() => navigate(`/configure/${name}`)}
              >
                custom
              </motion.div>
            </Html>
          ) : null}

          <ambientLight intensity={0.5} />
          <directionalLight position={[-1, 8, 5]} intensity={2} />
          {/*
          <Environment preset="city" />
          */}

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
        </Suspense>
      </Canvas>
    </section>
  )
}
export default CanvasModel

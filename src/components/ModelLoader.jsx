import { Html, useProgress } from "@react-three/drei"
import logo from "../assets/image/mclaren_logo_sm.png"

const ModelLoader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <div className="flex flex-col items-center">
        <img src={logo} alt="McLaren logo" className="w-8 aspect-square" />
        <div className="w-[18rem] h-0.5 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-0.5 bg-gray-800 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Html>
  )
}
export default ModelLoader

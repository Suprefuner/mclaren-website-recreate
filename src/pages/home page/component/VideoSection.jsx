import { Video } from "../../../components"

const VideoSection = () => {
  return (
    <section className="relative z-20">
      <Video model="elva" />
      <div className=" lg:flex lg:[&>*]:w-1/2">
        <Video model="artura" />
        <Video model="720S" />
      </div>
    </section>
  )
}
export default VideoSection

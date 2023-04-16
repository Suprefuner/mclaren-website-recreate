import Video from "./Video"
import mc720Img from "../assets/image/mclaren_720.jpg"
import mcArtura from "../assets/image/mclaren_artura.jpg"
import mcElvaImg from "../assets/image/mclaren_elva_video_image.jpg"

const VideoSection = () => {
  return (
    <section>
      <Video
        imgUrl={mcElvaImg}
        videoUrl="https://res.cloudinary.com/dytia9net/video/upload/v1681624003/video/Air_Power_-_McLaren_Elva_sb6qev.mp4"
        title="Mclaren Elva"
        content="pure, undiluted connection"
      />
      <div className="flex [&>*]:w-1/2">
        <Video
          imgUrl={mcArtura}
          videoUrl="https://res.cloudinary.com/dytia9net/video/upload/v1681624002/video/Artura__The_Supercar_Electrified._zzowob.mp4"
          title="mclaren artura"
        />
        <Video
          imgUrl={mc720Img}
          videoUrl="https://res.cloudinary.com/dytia9net/video/upload/v1681624524/video/Orange_Rush_-_McLaren_720S_Spider_wxei3d.mp4"
          title="mclaren 720s"
          content="lighter, stronger, faster, better"
        />
      </div>
    </section>
  )
}
export default VideoSection

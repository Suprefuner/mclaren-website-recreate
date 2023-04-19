import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import img from "../assets/image/mclaren_elva.jpg"
import img2 from "../assets/image/mclaren_720.jpg"

const ModelPageSwiper = ({ images, slidesPerView }) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={slidesPerView}
      className="bg-white h-[75vh]"
      grabCursor
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <img src={image} alt="photo" className="object-cover w-full h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default ModelPageSwiper

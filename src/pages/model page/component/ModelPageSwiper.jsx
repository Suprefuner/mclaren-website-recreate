import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

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

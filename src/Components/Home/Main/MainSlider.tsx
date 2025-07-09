import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { sliderImages } from "../../../Data/homeData";

interface SliderImage {
  id: string | number;
  src: string;
  alt: string;
}

const MainSlider = () => (
  <div className="w-full lg:max-w-[1120px] mx-auto">
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[ Navigation, Autoplay]}
      navigation
      className="mySwiper [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden
                 [&_.swiper-pagination]:hidden md:[&_.swiper-button-next]:block
                 md:[&_.swiper-button-prev]:block md:[&_.swiper-pagination]:block"
    >
      {sliderImages.map((img: SliderImage) => (
        <SwiperSlide key={img.id}>
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default MainSlider;

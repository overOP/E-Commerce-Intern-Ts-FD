import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import { ArrivalData } from "../../../Data/homeData";
import ArrivalCard from "./ArrivalCard";
import { GoArrowRight } from "react-icons/go";

const ArrivalsSection = () => (
  <div className="w-full max-w-[1440px] px-8 md:px-12 lg:px-[160px] mx-auto">
    {/* header */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex-col">
      <h2 className="text-2xl sm:text-3xl Poppins">New</h2><h2  className="text-2xl sm:text-3xl Poppins "> Arrivals</h2></div>
      <Link
        to="/products"
        className="group mt-2 hidden md:flex lg:flex items-center border-b border-black text-button-sm Inter"
      >
        More Products
        <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Swiper */}
    <Swiper
      slidesPerView={1.3}
      spaceBetween={16}
      breakpoints={{
        640: { slidesPerView: 2.3 },
        768: { slidesPerView: 3.3 },
        1024: { slidesPerView: 4.3 },
      }}
      modules={[Navigation]}
      navigation
      className="arrivals-swiper"
    >
      {ArrivalData.map((item) => (
        <SwiperSlide key={item.id} className="pb-6">
          <ArrivalCard old={""} {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
    <Link
      to="/products"
      className="group mt-2 w-[130px] flex md:hidden lg:hidden items-center border-b border-black text-button-sm Inter"
    >
      More Products <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

export default ArrivalsSection;

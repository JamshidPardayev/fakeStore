import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[450px] max-md:h-[400px] max-sm:h-[350px] my-1">
      <Swiper
        effect="coverflow"  
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {[
          "./swiper.jpg",
          "./swiper6.png",
          "./swiper8.jpg",
          "./swiper1.jpg",
          "./swiper2.jpg",
          "./swiper3.jpg",
          "./swiper4.jpg",
          "./swiper5.jpg",
          "./swiper7.jpg",
        ].map((img, index) => (
          <SwiperSlide key={index} className="">
            <div className="w-full h-[450px] max-md:h-[400px] max-sm:h-[350px] mx-auto bg-white rounded-xl overflow-hidden">
              <img
                src={`${img}`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

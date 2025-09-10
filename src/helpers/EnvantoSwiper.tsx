"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // ✅ Crucial for horizontal rendering
import "swiper/css/autoplay";

const logos = [
  "https://meditics.temptics.com/assets/img/client-logo.svg",
  "https://meditics.temptics.com/assets/img/client-logo.svg",
  "https://meditics.temptics.com/assets/img/client-logo.svg",
  "https://meditics.temptics.com/assets/img/client-logo.svg",
  "https://meditics.temptics.com/assets/img/client-logo.svg",
  "https://meditics.temptics.com/assets/img/client-logo.svg",
  "https://meditics.temptics.com/assets/img/client-logo.svg",
];

const LogoSwiper = () => {
  return (
    <div className="bg-[#021c35] py-10">
      <div className="w-11/12 mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center h-full">
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSwiper;

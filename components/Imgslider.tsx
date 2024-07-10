"use client";
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
const imgslider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className=""
    >
      <SwiperSlide>
        <img
          src="./532101_beautiful-house-hd-wallpapers_1920x1200_h.jpg"
          alt=""
          className="md:h-[400px] lg:h-[500px] w-full h-60 "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./9d0e8e12174f47327a53801af694a2f3.jpg"
          alt=""
          className="md:h-[400px] lg:h-[500px] w-full h-60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/195/978/non_2x/real-estate-agent-holding-house-key-to-his-client-after-signing-contract-concept-for-business-loan-investment-mortgage-real-estate-moving-home-or-renting-property-banner-with-copy-space-photo.jpg"
          alt=""
          className="md:h-[400px] lg:h-[500px] w-full h-60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1.jpg"
          alt=""
          className="md:h-[400px] lg:h-[500px] w-full h-60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://silverlinecrm.com/wp-content/uploads/2022/10/real-estate-header.jpg"
          alt=""
          className="md:h-[400px] lg:h-[500px] w-full h-60"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default imgslider;

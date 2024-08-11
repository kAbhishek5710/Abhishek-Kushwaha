import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import Project from "./Project";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SwiperComp({ projects }) {
  SwiperCore.use([Navigation]);
  return (
    <Swiper navigation autoplay={false} className="mt-3">
      {projects.map((project, index) => (
        <SwiperSlide>
          <Project project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComp({ images }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div className="border border-transparent rounded-lg">
          <img
            src={image}
            alt="Project_Img"
            className="border rounded-lg border-transparent"
          />
        </div>
      ))}
    </Slider>
  );
}

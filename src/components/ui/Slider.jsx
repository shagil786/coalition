import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
  };

  const images = [
    "/assets/thumb1.svg",
    "/assets/thumb2.svg",
    "/assets/thumb1.svg",
    "/assets/thumb2.svg",
    "/assets/thumb1.svg",
    "/assets/thumb2.svg",
    "/assets/thumb1.svg",
    "/assets/thumb2.svg",
    "/assets/thumb1.svg",
    "/assets/thumb2.svg",
  ];

  return (
    <div className="w-full h-60 bg-[#414f6b] opacity-80 absolute bottom-0 ">
      <div className="flex justify-center items-center w-full h-full">
        <Slider {...settings} className="w-10/12">
          {images.map((image, index) => (
            <div className="mx-8">
              <img
                src={image}
                key={index}
                className="w-60 h-40 "
                alt={`Thumb ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

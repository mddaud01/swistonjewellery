"use client";
import React from "react";
import Image from "next/image";
import firsthero from "../../../../public/assets/earingHero.png";
import Slider from "react-slick";


const Herosection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  
  return (
    <div className="bg-black h-[452px]">
     <Slider {...settings}>
        <div className="">
        <Image src={firsthero} alt="Description of the image" />
        </div>
        <div>
        <Image src={firsthero} alt="Description of the image" />
        </div>
        <div>
        <Image src={firsthero} alt="Description of the image" />
        </div>
      </Slider>
    </div>
  );
};

export default Herosection;

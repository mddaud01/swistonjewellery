import Image from "next/image";
import React from "react";
import Watchgroup from "../../../../../public/assets/watchgroup.png";
import DiamandSep from "../../../../../public/assets/diamandImage.png";
import ring1 from "../../../../../public/assets/motiring.png";
import ring2 from "../../../../../public/assets/motiring2.png";
import ring3 from "../../../../../public/assets/motiring3.png";
import ring4 from "../../../../../public/assets/motiring4.png";
import SingleCart from "../../sharedcompo/SingleCart";
import Slider from "react-slick";

const LatestProduct = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div  className="w-[1200px] mx-auto ">
      <div className="pt-[79px] pb-[75px]  ">
        <Image
          src={Watchgroup}
          alt="this is watch product"
          className="w-[1200px] mx-auto"
        />
      </div>
      <div className="text-white flex justify-center pb-[25px]">
        <Image src={DiamandSep} alt="diamant seperator"/>
      </div>
      <h2 className="text-[30px] text-[#CBB477] font-[500]  leading-[33px] text-center pb-[42px] ">Latest Products</h2>
      <div className="latestProductSlider">
      <Slider {...settings}>
        <div>
        <SingleCart image={ring1} heading={'Best Selling'} para={'Danny Gold Wedding Band'} currentrate={'₹18,781 '} prevRate={'₹22,345'}/>
        </div>
        <div>
        <SingleCart image={ring2}  heading={'Best Selling'} para={'Danny Gold Wedding Band'} currentrate={'₹18,781 '} prevRate={'₹22,345'}/>
        </div>
        <div>
        <SingleCart image={ring3}  heading={'Best Selling'} para={'Danny Gold Wedding Band'} currentrate={'₹18,781 '} prevRate={'₹22,345'}/>
        </div>
        <div>
        <SingleCart image={ring4}  heading={'Best Selling'} para={'Danny Gold Wedding Band'} currentrate={'₹18,781 '} prevRate={'₹22,345'}/>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default LatestProduct;

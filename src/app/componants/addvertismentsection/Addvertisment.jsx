import React from "react";
import Maskgroup from "../../../../public/assets/maskgroup.png";
import women from "../../../../public/assets/women.png";
import Image from "next/image";

const Addvertisement = () => {
  return (
    <div className="flex justify-end items-center bg-[#030303]">
      <div className="flex-1 flex gap-[70px] absolute left-0 right-0 mx-auto">
        <div className="w-[607px] h-[370px] ml-[178px] mt-[192px] mb-[218px]">
          <h1 className="text-[68px] font-[500] leading-[84.3px]  text-[#ffff] pb-[32px] ">Make Your Day Brighter .</h1>
          <p className="text-[#A3A3A3] font-[400] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat you have to understand this.
          </p>
           <button className="w-[167px] h-[44px]  rounded-[7px] outline-none border-[#CBB477] border text-[#CBB477] mt-[34px] text-[20px] font-[500] hover:border-[black] hover:text-[black] hover:bg-[#CBB477] active:bg-[black] active:text-[#CBB477]">Shop Now</button>
        </div>
        <div className="w-[518px] h-[647px] mt-[63px]">
            <Image src={women} className="w-full h-full"/>
        </div>
      </div>
      <div className="bg-[#CBB477] h-[780px] w-[600px] bg-cover " style={{backgroundImage : `url("/assets/maskgroup.png")`}}>
      </div>
    </div>
  );
};

export default Addvertisement;

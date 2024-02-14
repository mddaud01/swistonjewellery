import React from "react";
import Maskgroup from "../../../../public/assets/maskgroup.png";
import women from "../../../../public/assets/women.png";
import Image from "next/image";

const Addvertisement = () => {
  return (
    <div className="flex justify-between items-center bg-[#030303]">
      <div className=" flex-1 relative">
        <div className="w-[607px] h-[370px] ml-[178px] mt-[192px] mb-[218px]">
          <h1 className="text-[68px] font-[500] leading-[84.3px]  text-[#ffff] pb-[32px] ">Make Your Day Brighter .</h1>
          <p className="text-[#A3A3A3] font-[400] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat you have to understand this.
          </p>
        </div>
        <Image src={women} alt="this is women add image " className=" absolute top-[63px] bottom-[70px] left-[855px] z-10"/>
      </div>
      <div className="bg-[#CBB477] h-[780px] w-[600px]">
        <div className="">
          <Image src={Maskgroup} alt="this is mask group image " />
        </div>
      </div>
    </div>
  );
};

export default Addvertisement;

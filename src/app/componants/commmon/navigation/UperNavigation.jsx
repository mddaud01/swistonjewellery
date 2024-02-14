import React from "react";
import Logo from "../../../../../public/assets/logo.png";
import Input from "../../sharedcompo/Input";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import LeftpartUperNavigation from "./componants/LeftpartUperNavigation";

const UperNavigation = () => {
  return (
    <div className="bg-[#030303] text-white">
      <div className="flex justify-between pl-[119px] pr-[112px] items-center">
        <div className="  text-white gap-[15px] flex items-center ">
          <label className="relative text-[#CBB477]">
            <span className="absolute top-[50%] right-[20px]  translate-y-[-50%] tr ">
              {" "}
              <CiSearch fontSize={"20px"} color={"#CBB477"} />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search products"
              className="text-[ #CBB477] w-[296px] border border-[#232017] px-[15px] text-[#CBB477] placeholder:text-[#3F3826] rounded-[5px] outline-none py-[9px] bg-[#030303]"
            />
          </label>
          <label className="relative">
            <span className="text-[#CBB477] absolute top-[-20px] left-0  text-[15px] font-[400] leading-[16.5px]">
              {" "}
              Delivery & Stores
            </span>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search products"
              className="w-[231px] border border-[#232017] px-[11px] py-[9px] text-[#CBB477] placeholder:text-[#3F3826] rounded-[5px] outline-none  bg-[#030303]"
            />
          </label>
        </div>
        <div className="">
          <Image src={Logo} alt="Description of the image logo " width={154} height={147} />
        </div>
        <div className="w-[519px]">
          <LeftpartUperNavigation />
        </div>
      </div>
    </div>
  );
};

export default UperNavigation;

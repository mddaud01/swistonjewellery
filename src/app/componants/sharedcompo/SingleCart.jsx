import Image from "next/image";
import React from "react";

const SingleCart = ({ image, heading, para, currentrate, prevRate }) => {

  return (
    <div>
      <div>
        <Image src={image} className="w-[375px] h-[294px] pb-[15px]" />
      </div>
      <div className="w-[219px] h-[86px] mx-auto">
        <h3 className=" font-[500] text-[18px] leading-[19.8px] text-[#757575] text-center mb-[6px]">{heading}</h3>
        <p className=" font-[600] text-[18px] leading-[19.8px] text-center text-[#FFFFFF] pb-[14px] border-b border-solid border-[#757575]">{para} </p>
       
        <div className="flex items-center gap-3 justify-center mt-[6px]">
          <span className="text-[#CBB477] text-[18px] font-[600] text-center"> {currentrate}</span> <span className="text-[#707070] text-[18px] font-[600] text-center">{prevRate}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;

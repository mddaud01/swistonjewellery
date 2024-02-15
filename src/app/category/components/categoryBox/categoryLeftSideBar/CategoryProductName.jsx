import React from "react";
import { IoIosArrowUp } from "react-icons/io";

function CategoryProductName({ categoryProduct, materialItem }) {
  return (
    <>
      <div className="">
        <div className="flex justify-between  leading-[19.36px ] pt-3">
          <p className="text-[16px] font-[600] leading-[19.36px ] text-[#1C1C1C] ">
            {" "}
            {categoryProduct}
          </p>
          <p className="text-[#1C1C1C] mt-[3px]">
            <IoIosArrowUp />
          </p>
        </div>
        <ol className="font-[400] text-[14px] text-[#505050] ">
          {materialItem.map((item) => (
            <li className="leading-[19.36px ] pt-[9px] flex">
              <input type="checkbox" className="text-[#FFFFFF]" />
              <span className="text-[#1C1C1C] pl-[10px] ">{item.itemName}</span>
            </li>
          ))}

          <span className="font-[400] text-[14px] leading-[19.36px ] text-[#CBB477] pt-[9px]">
            See All
          </span>
        </ol>
      </div>
    </>
  );
}

export default CategoryProductName;

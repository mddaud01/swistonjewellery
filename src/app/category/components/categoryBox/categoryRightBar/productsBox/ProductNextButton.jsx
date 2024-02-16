import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function ProductNextButton() {
  return (
    <>
      <div className="flex justify-end  mt-4 gap-3 w-[830px]">
        <div className="w-[125px] h-[40px] border-[1px] border-[#DEE2E7] bg-[#FFFFFF] rounded-[6px] text-[#1C1C1C] flex justify-between">
          <span className="mt-[6px] ml-[10px]"> Show 10</span>
          <span className="mt-[10px] mr-[6px] text-[#8B96A5]">
            <IoIosArrowDown />
          </span>
        </div>
        <div class="inline-flex rounded-md shadow-sm " role="group ">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-[#000] bg-[#ffffff]  border-t border-b rounded-s-lg hover:bg-gray-100 ">
            <IoIosArrowBack />
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-[#000] bg-[#ffffff]  border-t border-b border-gray-200 hover:bg-gray-100   ">
            1
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-[#000] bg-[#ffffff]  border-t border-b border-gray-200 hover:bg-gray-100   ">
            2
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-[#000] bg-[#ffffff]  border-t border-b border-gray-200 hover:bg-gray-100   ">
            3
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium  text-[#000] bg-[#ffffff]  border-t border-b border-gray-200 hover:bg-gray-100  rounded-r-lg ">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductNextButton;

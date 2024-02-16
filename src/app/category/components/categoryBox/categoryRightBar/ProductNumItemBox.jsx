import React from "react";
import { TbTableOptions } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
function ProductNumItemBox() {
  return (
    <>
      <div className="w-[830px] h-[62px]  rounded-[6px] border-[1px] bg-[#FFFFFF] ">
        <div className="flex  justify-between">
          <div className="flex  text-[16px] leading-[19.36px ] font-[600] p-4">
            <span className="text-[#6d6868]">12,911 items in </span>
            <span className="pl-2 text-[#1C1C1C]"> Rings</span>
          </div>
          <div className="flex p-2">
            <div className="relative  h-10 w-[172px] bg-[#FFFFFF] text-[#6d6868] rounded-[6px]">
              <select class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option value="brazil">Brazil</option>
                <option value="bucharest">Bucharest</option>
                <option value="london">London</option>
                <option value="washington">Washington</option>
              </select>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Popularity
              </label>
            </div>
            <div class="btn-group h-10 w-[76px]  border-[1px] rounded-[6px] ml-2 flex justify-between">
              <button className="text-[#1C1C1C] p-3 bg-[#DEE2E7]">
                <TbTableOptions className="" />
              </button>
              <button className="text-[#1C1C1C] p-3">
                <GiHamburgerMenu className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductNumItemBox;

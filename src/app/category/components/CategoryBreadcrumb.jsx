import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const breadCrumbItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Jewellary" },
  { id: 3, title: "Rings" },
];
function CategoryBreadcrumb() {
  return (
    <div className="flex h-[24px] pt-[24px] justify-center">
      {breadCrumbItems.map((item) => (
        <p className="flex  ">
          <span className="text-[16px] font-[400] leading-[24px] tracking-[-0.2px] text-[#6D6B65]">
            {item.title}
          </span>
          <span className="text-[16px] font-[400] text-[#8B96A5]  mt-[5px] ml-[6.91px] w-[20px] ">
            <IoIosArrowForward />
          </span>
        </p>
      ))}
    </div>
  );
}

export default CategoryBreadcrumb;

import React from "react";
import { RxCross2 } from "react-icons/rx";

const itemSelect = [
  { id: 1, itemName: "Rings" },
  { id: 2, itemName: "Earrings" },
  { id: 3, itemName: "Metallic" },
  { id: 4, itemName: "3 star" },
];
function ProductSelectButton() {
  return (
    <>
      <div className="flex flex-wrap mt-3 text-[16px]">
        {itemSelect.map((item) => (
          <div className="flex w-fit h-[32px] border-[2px] border-[#0D6EFD] bg-[#FFFFFF] text-[#505050] pl-2 pr-2 font-[400] mr-3 rounded-[6px]">
            <span className="text-[#1C1C1C]">{item.itemName}</span>
            <span className="mt-[5px] ml-[4.17px] leading-[11.67px]">
              <RxCross2 />
            </span>
          </div>
        ))}
        <span className="text-[#CBB477] leading-[19px ] mt-1">
          Clear All Filter
        </span>
      </div>
    </>
  );
}

export default ProductSelectButton;

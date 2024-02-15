import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import CategoryProductName from "./CategoryProductName";
const categoryItem = [
  { id: 1, itemName: "Best Seller" },
  { id: 1, itemName: "Earrings" },
  { id: 1, itemName: "Neckless" },
  { id: 1, itemName: "Rings" },
];
const materialItem = [
  { id: 1, itemName: "Platinum" },
  { id: 1, itemName: "Gold" },
  { id: 1, itemName: "Diamond" },
  { id: 1, itemName: "Gemstone" },
  { id: 1, itemName: "Solitaire" },
];

function CategoryLeftSideBar() {
  return (
    <>
      <div className="w-[269px] h-full rounded-[6px] bg-[#FFFFFF] mt-[40px] py-3 px-3">
        <div>
          <div className="flex justify-between  leading-[19.36px ]">
            <p className="text-[16px] font-[600] leading-[19.36px ] text-[#1C1C1C] ">
              {" "}
              Category
            </p>
            <p className="text-[#1C1C1C] mt-[3px]">
              <IoIosArrowUp />
            </p>
          </div>
          <ol className="font-[400] text-[14px] text-[#505050] ">
            {materialItem.map((item) => (
              <li className="leading-[19.36px ] pt-[9px]">{item.itemName}</li>
            ))}
            <span className="font-[400] text-[14px] leading-[19.36px ] text-[#CBB477] pt-[9px]">
              See All
            </span>
          </ol>
        </div>
        <CategoryProductName
          categoryProduct={"Material"}
          materialItem={materialItem}
        />
        <CategoryProductName
          categoryProduct={"Metal"}
          materialItem={materialItem}
        />
        <CategoryProductName
          categoryProduct={"Price Range"}
          materialItem={materialItem}
        />
        <CategoryProductName
          categoryProduct={"Condition"}
          materialItem={materialItem}
        />
        <CategoryProductName
          categoryProduct={"Ratings"}
          materialItem={materialItem}
        />
        <CategoryProductName
          categoryProduct={"Mnufacture"}
          materialItem={materialItem}
        />
      </div>
    </>
  );
}

export default CategoryLeftSideBar;

import React from "react";

import CategoryLeftSideBar from "./categoryLeftSideBar/CategoryLeftSideBar";
import ProductNumItemBox from "./categoryRightBar/ProductNumItemBox";
import ProductSelectButton from "./categoryRightBar/ProductSelectButton";
import ProductBox from "./categoryRightBar/productsBox/ProductBox";

function CategoryBox() {
  return (
    <>
      <div className="flex w-[1200px] m-auto">
        <CategoryLeftSideBar />
        <div className=" mt-[40px] ml-4 ">
          <ProductNumItemBox />
          <ProductSelectButton />
          <ProductBox />
        </div>
      </div>
    </>
  );
}

export default CategoryBox;

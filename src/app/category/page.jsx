import React from "react";
import CategoryBreadcrumb from "./components/CategoryBreadcrumb";
import CategoryBox from "./components/categoryBox/CategoryBox";
const breadCrumbItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Jewellary" },
  { id: 3, title: "Rings" },
];
function Page() {
  return (
    <div className="bg-[#3A3A3A] w-[100%] h-[1940px]">
      <div className=" pl-[130px]">
        <CategoryBreadcrumb breadCrumbItems={breadCrumbItems} />
        <CategoryBox />
      </div>
    </div>
  );
}

export default Page;

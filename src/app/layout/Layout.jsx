import React from "react";
import UperNavigation from "../componants/commmon/navigation/UperNavigation";
import Lowernavigation from "../componants/commmon/navigation/Lowernavigation";
import Herosection from "../componants/herosection/Herosection";
import Securityconcern from "../componants/Securityconcern";
import Categoryyoulovemain from "../componants/categoryYoulove/categoryyoulovemain";
import LatestProduct from "../componants/categoryYoulove/latestproduct/LatestProduct";
import Addvertisment from "../componants/addvertismentsection/Addvertisment";

const Layout = () => {
  return (
    <div className="">
      <div>
        <Herosection />
      </div>
      <div className="h-[115px] bg-[#CBB477]  items-center">
        <Securityconcern />
      </div>
      <div className="bg-[#030303] text-[#CBB477] ">
        <Categoryyoulovemain/>
      </div>
      <div className=" w-[100%] bg-[#3A3A3A]">
        <LatestProduct/>
      </div>
      <div className="  ">
        <Addvertisment/>
      </div>
    </div>
  );
};

export default Layout;

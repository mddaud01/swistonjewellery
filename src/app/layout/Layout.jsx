import React from "react";
import Securityconcern from "../componants/Securityconcern";
import Categoryyoulovemain from "../componants/categoryYoulove/categoryyoulovemain";
import LatestProduct from "../componants/categoryYoulove/latestproduct/LatestProduct";
import Addvertisment from "../componants/addvertismentsection/Addvertisment";
import Notification from "../componants/notificationbannar/Notification";
import PosterImage from "../componants/posterimage/PosterImage";
import Herosection from "../componants/herosection/Herosection";

const Layout = () => {
  return (
    <div className="">
      <div>
        <Herosection />
      </div>
      <div className="  bg-[#CBB477]  items-center">
        <Securityconcern />
      </div>
      <div className="bg-[#030303] text-[#CBB477] ">
        <Categoryyoulovemain/>
      </div>
      <div className=" w-[100%] bg-[#3A3A3A]">
        <LatestProduct/>
      </div>
      <div className="">
        <Addvertisment/>
      </div>
      <div>
        <Notification/>
      </div>
      <div>
        <PosterImage/>
      </div>
    </div>
  );
};

export default Layout;

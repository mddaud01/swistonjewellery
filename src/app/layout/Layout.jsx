import React from "react";
import UperNavigation from "../componants/commmon/navigation/UperNavigation";
import Lowernavigation from "../componants/commmon/navigation/Lowernavigation";
import Herosection from "../componants/herosection/Herosection";
import Securityconcern from "../componants/Securityconcern";

const Layout = () => {
  return (
    <div className="">
      <div>
        <Herosection />
      </div>
      <div className="h-[115px] bg-[#CBB477]  items-center">
        <Securityconcern />
      </div>
    </div>
  );
};

export default Layout;

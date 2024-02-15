import React from "react";
import SingleCart from "../sharedcompo/SingleCart";
import Ring from "../../../../public/assets/motiring.png";
import Ring2 from "../../../../public/assets/motiring2.png";
import Ring3 from "../../../../public/assets/motiring3.png";
import Ring4 from "../../../../public/assets/motiring4.png";

const Notification = () => {
  return (
    <div className=" bg-gray-900  pb-[100px]">
      <div className=" w-[1200px] mx-auto">
        <div className="flex justify-center pt-[75px] gap-[32px]">
          <button className="border border-yellow-500 px-4 py-2 rounded text-yellow-500 hover:bg-yellow-500 hover:text-gray-600">
            BEST SELLING
          </button>
          <button className="border border-gray-700 px-4 py-2 rounded text-gray-700">
            NEW ARRIVALS
          </button>
          <button className="border border-gray-700 px-4 py-2 rounded text-gray-700">
            ON SALE
          </button>
        </div>
        <div className=" text-white mt-8 flex gap-[32px] h-[464px] overflow-auto justify-center item-center flex-wrap hide-scrollbar" >
          <div className=" hover:scale-[1.1] hover:cursor-pointer hover:transition-all">
            <SingleCart
              image={Ring}
              heading={"Best Selling"}
              para={"Danny Gold Wedding Band"}
              currentrate={"₹18,781 "}
              prevRate={"₹22,345"}
            />
          </div>
          <div className=" hover:scale-[1.1] hover:cursor-pointer hover:transition-all">
            <SingleCart
              image={Ring2}
              heading={"Best Selling"}
              para={"Danny Gold Wedding Band"}
              currentrate={"₹18,781 "}
              prevRate={"₹22,345"}
            />
          </div>
          <div className=" hover:scale-[1.1] hover:cursor-pointer hover:transition-all">
            <SingleCart
              image={Ring3}
              heading={"Best Selling"}
              para={"Danny Gold Wedding Band"}
              currentrate={"₹18,781 "}
              prevRate={"₹22,345"}
            />
          </div>
          <div className=" hover:scale-[1.1] hover:cursor-pointer hover:transition-all">
            <SingleCart
              image={Ring3}
              heading={"Best Selling"}
              para={"Danny Gold Wedding Band"}
              currentrate={"₹18,781 "}
              prevRate={"₹22,345"}
            />
          </div>
          <div className=" hover:scale-[1.1] hover:cursor-pointer hover:transition-all">
            <SingleCart
              image={Ring3}
              heading={"Best Selling"}
              para={"Danny Gold Wedding Band"}
              currentrate={"₹18,781 "}
              prevRate={"₹22,345"}
            />
          </div>
          <div className=" hover:scale-[1.1] hover:cursor-pointer hover:transition-all">
            <SingleCart
              image={Ring3}
              heading={"Best Selling"}
              para={"Danny Gold Wedding Band"}
              currentrate={"₹18,781 "}
              prevRate={"₹22,345"}
            />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Notification;

import React from "react";

const Lowernavigation = () => {
  return (
    <div className="bg-[#030303]  border-t-[1px] border-b-[1px] border-[#292929] h-[73px] text-[#CBB477] flex  items-center">
      <div className=" mx-auto  w-[978px] flex justify-between items-center">
        <div className=" size-[17px]">Rings</div>
        <div>
          <select className=" bg-transparent">
            <option value="earrings">Earrings</option>
          </select>
        </div>
        <div>
          {" "}
          <select className=" bg-transparent">
            <option value="bracelets&bangles">Bracelets & Bangles</option>
          </select>
        </div>
        <div>
          <select className=" bg-transparent">
            <option value="solitaries">Solitaries</option>
          </select>{" "}
        </div>
        <div>
          {" "}
          <select className=" bg-transparent">
            <option value="mangalsutras">Mangalsutras</option>
          </select>
        </div>
        <div>Necklace</div>
      </div>
    </div>
  );
};

export default Lowernavigation;

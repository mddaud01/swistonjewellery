import React from "react";
import CategoryBreadcrumb from "../category/components/CategoryBreadcrumb";
import CartCheckout from "./components/cartCheckout/CartCheckout";
const breadCrumbItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Jewellary" },
  { id: 3, title: "Rings" },
  { id: 4, title: "Cart" },
];
function Cart() {
  return (
    <>
      <div className="bg-[#3A3A3A] w-[100%] h-[1940px]">
        <div className=" pl-[130px]">
          <CategoryBreadcrumb breadCrumbItems={breadCrumbItems} />
          <CartCheckout />
        </div>
      </div>
    </>
  );
}

export default Cart;

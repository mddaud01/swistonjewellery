import React from "react";
import ProductBoxContent from "./ProductBoxContent";
import ProductNextButton from "./ProductNextButton";
function ProductBox() {
  return (
    <>
      <div className="flex mt-3 flex-wrap">
        <ProductBoxContent />
        <ProductBoxContent />
        <ProductBoxContent />
        <ProductBoxContent />
        <ProductBoxContent />
        <ProductBoxContent />
      </div>
      <ProductNextButton />
    </>
  );
}

export default ProductBox;

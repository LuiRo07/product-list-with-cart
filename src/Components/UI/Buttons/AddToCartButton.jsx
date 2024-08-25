import React from "react";
import cartIcon from "../../../assets/images/icon-add-to-cart.svg";

const AddToCartButton = () => {
  return (
    <button className="font-semibold relative bottom-8 z-10 bg-slate-100 w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black">
      <img src={cartIcon} />
      <a href="#">Add To Cart</a>
    </button>
  );
};

export default AddToCartButton;

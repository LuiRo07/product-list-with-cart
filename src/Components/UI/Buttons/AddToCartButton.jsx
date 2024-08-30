import React, { useState } from "react";
import cartIcon from "../../../assets/images/icon-add-to-cart.svg";
import SelectedButton from "./SelectedButton";

const AddToCartButton = ({ setButtonState, buttonState }) => {
  function handleButton() {
    setButtonState(!buttonState);
  }

  return (
    <button
      className="font-semibold relative bottom-8 z-10 bg-slate-100 w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black"
      onClick={handleButton}
    >
      <img src={cartIcon} />
      <p>Add To Cart</p>
    </button>
  );
};

export default AddToCartButton;

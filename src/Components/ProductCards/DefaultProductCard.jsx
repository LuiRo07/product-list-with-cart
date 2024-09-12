import React from "react";
import cartIcon from "/images/icon-add-to-cart.svg";

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

export default function DefaultProductCard({
  productImage,
  name,
  setButtonState,
  buttonState,
}) {
  return (
    <>
      <img
        className="w-full rounded-xl"
        src={productImage}
        alt={"Photo of " + name}
      />
      <AddToCartButton
        setButtonState={setButtonState}
        buttonState={buttonState}
      />
    </>
  );
}

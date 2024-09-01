import React from "react";
import AddToCartButton from "../UI/Buttons/AddToCartButton";

export default function DefaultProductCard({
  productImage,
  name,
  setButtonState,
  buttonState,
}) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-full rounded-xl"
        src={productImage}
        alt={"Photo of " + name}
      />
      <AddToCartButton
        setButtonState={setButtonState}
        buttonState={buttonState}
      />
    </div>
  );
}

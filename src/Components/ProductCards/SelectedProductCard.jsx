import React from "react";
import SelectedButton from "../UI/Buttons/SelectedButton";

export default function SelectedProductCard({
  productImage,
  name,
  buttonState,
  setButtonState,
  itemQuantity,
  setItemQuantity,
}) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-full rounded-xl border-4 border-red_orange"
        src={productImage}
        alt={"Photo of " + name}
      />
      <SelectedButton
        buttonState={buttonState}
        setButtonState={setButtonState}
        setItemQuantity={setItemQuantity}
        itemQuantity={itemQuantity}
      />
    </div>
  );
}

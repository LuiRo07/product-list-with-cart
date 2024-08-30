import React, { useState } from "react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg";
import AddToCartButton from "./AddToCartButton";

function SelectedButton({
  setButtonState,
  buttonState,
  setItemQuantity,
  itemQuantity,
}) {
  const increment = () => setItemQuantity((prevCount) => prevCount + 1);

  const decrement = () => {
    itemQuantity === 1
      ? setButtonState(!buttonState)
      : setItemQuantity((prevCount) => prevCount - 1);
  };

  return (
    <button
      className="relative bottom-8 z-10 flex justify-between gap-2 w-3/5 p-4 rounded-full text-white bg-orange-800"
      type="button"
    >
      <div
        className="grid items-center self-center p-1 rounded-full border size-5"
        onClick={decrement}
      >
        <img src={DecrementIcon} />
      </div>
      {itemQuantity}
      <div className="self-center p-1 rounded-full border" onClick={increment}>
        <img src={IncrementIcon} />
      </div>
    </button>
  );
}

export default SelectedButton;

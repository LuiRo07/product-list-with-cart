import React, { useState } from "react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg";

function SelectedButton() {
  const [itemQuantity, setItemQuantity] = useState(1);

  function incrementItem() {
    setItemQuantity((itemQuantity) => itemQuantity + 1);
  }

  return (
    <button
      className="relative bottom-8 z-10 flex justify-between gap-2 w-3/5 p-4 rounded-full text-white bg-orange-800"
      type="button"
    >
      <a className="grid items-center self-center p-1 rounded-full border size-5">
        <img src={DecrementIcon}></img>
      </a>
      {itemQuantity}
      <a className="self-center p-1 rounded-full border">
        <img src={IncrementIcon} onClick={incrementItem}></img>
      </a>
    </button>
  );
}

export default SelectedButton;

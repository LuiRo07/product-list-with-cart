import React from "react";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";

function SelectedButton({
  setButtonState,
  buttonState,
  setItemQuantity,
  itemQuantity,
}) {
  const increment = () => {
    setItemQuantity((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (itemQuantity === 1) {
      setButtonState(!buttonState);
    } else {
      setItemQuantity((prevCount) => prevCount - 1);
    }
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

export default function SelectedProductCard({
  productImage,
  buttonState,
  setButtonState,
  itemQuantity,
  setItemQuantity,
}) {
  return (
    <>
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
    </>
  );
}

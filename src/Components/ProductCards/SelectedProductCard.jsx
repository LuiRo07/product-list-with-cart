import React, { useContext } from "react";
import DecrementIcon from "../../assets/images/icon-decrement-quantity.svg";
import IncrementIcon from "../../assets/images/icon-increment-quantity.svg";
import { CartContext } from "../../Context/context";

function SelectedButton({
  name,
  price,
  setButtonState,
  buttonState,
  setItemQuantity,
  itemQuantity,
}) {
  const { cart, setCart } = useContext(CartContext);

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

  function handleAddToCart() {
    setCart(...cart, {
      name: name,
      price: price,
      quantity: itemQuantity,
    });
  }

  return (
    <button
      className="relative bottom-8 z-10 flex justify-between gap-2 w-3/5 p-4 rounded-full text-white bg-orange-800"
      type="button"
      value={itemQuantity}
      onClick={handleAddToCart}
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
  name,
  price,
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
        name={name}
        price={price}
        buttonState={buttonState}
        setButtonState={setButtonState}
        setItemQuantity={setItemQuantity}
        itemQuantity={itemQuantity}
      />
    </>
  );
}

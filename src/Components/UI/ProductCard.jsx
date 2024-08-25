import React, { useState } from "react";
import AddToCartButton from "./Buttons/AddToCartButton";
import SelectedButton from "./Buttons/SelectedButton";
import CartIcon from "../../assets/images/icon-add-to-cart.svg";
import DecrementIcon from "../../assets/images/icon-decrement-quantity.svg";
import IncrementIcon from "../../assets/images/icon-increment-quantity.svg";

function ProductCard({ product }) {
  const [buttonState, setButtonState] = useState(false);

  function handleButton() {
    setButtonState(!buttonState);
  }

  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-col items-center">
        {/* assuming product is the image object */}
        <img
          className="w-full rounded-xl"
          src={product.image.mobile}
          alt={"Photo of " + product.name}
        />
        {buttonState ? (
          <SelectedButton onClick={handleButton} />
        ) : (
          <AddToCartButton onClick={handleButton} />
        )}
      </div>
      <h2 className="text-rose-500">{product.category}</h2>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-red_orange font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

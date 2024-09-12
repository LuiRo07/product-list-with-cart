import React, { useState } from "react";
import DefaultProductCard from "../ProductCards/DefaultProductCard";
import SelectedProductCard from "../ProductCards/SelectedProductCard";

function ProductCard({ product }) {
  const [buttonState, setButtonState] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  // renders component based on button state
  return (
    <div className="flex flex-col mb-4">
      {/* assuming product is the image object */}
      <div className="flex flex-col items-center">
        {buttonState ? (
          <SelectedProductCard
            productImage={product.image.mobile}
            name={product.name}
            price={product.price}
            setButtonState={setButtonState}
            buttonState={buttonState}
            setItemQuantity={setItemQuantity}
            itemQuantity={itemQuantity}
          />
        ) : (
          <DefaultProductCard
            productImage={product.image.mobile}
            name={product.name}
            buttonState={buttonState}
            setButtonState={setButtonState}
          />
        )}
      </div>
      <h2 className="text-rose-500">{product.category}</h2>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-red_orange font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

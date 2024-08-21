import React from "react";
import AddToCartButton from "./Buttons/AddToCartButton";
import SelectedButton from "./Buttons/SelectedButton";

function ProductCard({ product }) {
  const ButtonStyles = {
    AddToCart:
      "relative bottom-8 z-10 bg-slate-100 w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black",
    SelectedItem:
      "flex justify-between gap-2 w-3/5 p-4 rounded-full text-white bg-orange-800",
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-col items-center">
        {/* assuming product is the image object */}
        <img
          className="w-full rounded-xl"
          src={product.image.mobile}
          alt={"Photo of " + product.name}
        />
        <AddToCartButton />
        <SelectedButton />
      </div>
      <h2>{product.category}</h2>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

import React, { useState, useContext } from "react";
import cartIcon from "/images/icon-add-to-cart.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import { CartContext } from "../../Context/cart";
import { ProductContext } from "../../Context/product";

function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);
  const { handleProductState } = useContext(ProductContext);

  function handleButtonState() {
    handleProductState(product);
    addToCart(product);
  }

  return (
    <div className="flex justify-center">
      <button
        className="font-semibold relative bottom-8 z-10 bg-slate-100 w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black"
        onClick={handleButtonState}
      >
        <img src={cartIcon} al={"cart icon"} />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}

function SelectedCardButton({ product }) {
  const { addQuantity, subtractQuantity } = useContext(ProductContext);

  function decrement() {
    subtractQuantity(product);
  }

  function increment() {
    addQuantity(product);
  }

  return (
    <div className="flex justify-center">
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
        {product.quantity}
        <div
          className="self-center p-1 rounded-full border"
          onClick={increment}
        >
          <img src={IncrementIcon} />
        </div>
      </button>
    </div>
  );
}

function SelectedCardProduct({ product }) {
  return (
    <>
      <div className="w-full rounded-xl overflow-hidden border-4 border-red_orange">
        <img src={product.image.mobile} alt={"Photo of " + product.name} />
      </div>
      <SelectedCardButton product={product} />
    </>
  );
}

function DefaultCard({ product }) {
  return (
    <>
      <div
        className={`w-full rounded-xl overflow-hidden border-2 "border-transparent"
        }`}
      >
        <img src={product.image.mobile} alt={"Photo of " + product.name} />
      </div>
      <AddToCartButton product={product} />
    </>
  );
}

function NewProductCard() {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map((dessert, index) => (
        <div className="mb-10" key={index}>
          {dessert.buttonState ? (
            <SelectedCardProduct product={dessert} />
          ) : (
            <DefaultCard product={dessert} />
          )}
          <h2 className="text-rose-500">{dessert.category}</h2>
          <h3 className="font-bold">{dessert.name}</h3>
          <p className="text-red_orange font-bold">
            ${dessert.price.toFixed(2)}
          </p>
        </div>
      ))}
    </>
  );
}

export default NewProductCard;

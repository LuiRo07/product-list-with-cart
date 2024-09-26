import React, { useState, useContext, useEffect } from "react";
import cartIcon from "/images/icon-add-to-cart.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import { CartContext } from "../../Context/cart";
import { ProductContext } from "../../Context/product";

function AddToCartButton({ product }) {
  const { addQuantity } = useContext(ProductContext);

  function handleButtonState() {
    addQuantity(product);
  }

  return (
    <div className="flex justify-center">
      <button
        className="font-semibold relative bottom-8 z-10 bg-slate-100 w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black md:overflow-hidden md:text-sm md:gap-0 md:font-medium"
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

// this is where state should be rendered for product cards individually, don't touch
function DefaultCard({ product }) {
  const windowWidth = window.innerWidth;
  let imageRender;

  if (windowWidth <= 640) {
    imageRender = product.image.mobile;
  } else if (windowWidth <= 768) {
    imageRender = product.image.tablet;
  } else {
    imageRender = product.image.desktop;
  }

  return (
    <div className="mb-10">
      <div
        className={`w-full rounded-xl overflow-hidden border-2 ${
          product.buttonState ? "border-red_orange" : "border-transparent"
        }`}
      >
        <img src={imageRender} alt={"Photo of " + product.name} />
      </div>
      {product.buttonState ? (
        <SelectedCardButton product={product} />
      ) : (
        <AddToCartButton product={product} />
      )}
      <h2 className="text-rose-500">{product.category}</h2>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-red_orange font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

function NewProductCard() {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map((dessert, index) => (
        <div className="mb-2" key={index}>
          <DefaultCard product={dessert} />
        </div>
      ))}
    </>
  );
}

export default NewProductCard;

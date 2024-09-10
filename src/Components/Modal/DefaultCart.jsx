import React from "react";
import EmptyCart from "../../assets/images/illustration-empty-cart.svg";

export default function DefaultCart() {
  return (
    <div className="h-64 p-3">
      <div className="w-full h-full p-3">
        <h1 className="text-red_orange font-bold text-2xl mb-8">
          Your Cart ({0})
        </h1>
        <img className="relative left-1/4 mb-6" src={EmptyCart} />
        <p className="ml-3">Your added items will appear here</p>
      </div>
    </div>
  );
}

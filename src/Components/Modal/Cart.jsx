import React from "react";
import EmptyCart from "../../assets/images/illustration-empty-cart.svg";

function Cart() {
  const items = 0;

  return (
    <div className="h-64 p-3">
      <div className="w-full h-full p-3">
        <h1>Your Cart ({items})</h1>
        <img className="relative left-1/4" src={EmptyCart} />
        <p className="ml-3">Your added items will appear here</p>
      </div>
    </div>
  );
}

export default Cart;

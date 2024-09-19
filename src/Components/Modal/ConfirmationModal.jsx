import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/cart";
import tiramisuThumbnail from "/images/image-tiramisu-thumbnail.jpg";
import orderConfirmedIcon from "/images/icon-order-confirmed.svg";

// Might delete, since the button is hardcoded within Confirmation Modal
function StartNewOrderButton() {
  return (
    <button
      type="button"
      className="w-full bg-red_orange text-slate-200 p-4 rounded-full border border-black"
    >
      Start New Order
    </button>
  );
}

function CartList({ cartItem }) {
  return (
    <li className="list-none">
      <div className="bg-rose-50 grid grid-cols-4 border-b-2">
        <div className="p-4">
          <img
            src={cartItem.image.thumbnail}
            alt="thumbnail image for tiramisu"
            size={20}
          />
        </div>
        <div className="col-span-2 self-center">
          <h1>{cartItem.name}</h1>
          <span className="font-bold text-red_orange mr-3">
            {cartItem.quantity}x
          </span>
          <span className="text-rose-300 font-medium">
            @ ${cartItem.price.toFixed(2)}
          </span>
        </div>
        <div className="self-center">
          <span className="font-semibold">
            {"$ " + `${(cartItem.price * cartItem.quantity).toFixed(2)}`}
          </span>
        </div>
      </div>
    </li>
  );
}

function ConfirmationModal({ showModal, setShowModal }) {
  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);

  function handleClearCartButton() {
    setShowModal(!showModal);
    clearCart();
  }

  const cartTotal = `$ ${getCartTotal().toFixed(2)}`;

  return (
    <div className="p-5 border rounded-2xl">
      <img
        className="mb-3"
        src={orderConfirmedIcon}
        alt="green checkmark for confirmation"
      />
      <h1 className="text-3xl font-extrabold w-1/2 mb-2">Order Confirmed</h1>
      <p className="text-rose-500 mb-5">We hope you enjoy your food!</p>

      {/* cart list */}
      <div className="border border-b-2">
        {cartItems.map((item, index) => (
          <CartList cartItem={item} key={index} />
        ))}
      </div>
      <div className="flex justify-between bg-rose-50 mb-7 p-5">
        <h3 className="text-lg">Order Total</h3>
        <h2 className="font-extrabold text-2xl">{cartTotal}</h2>
      </div>
      <button
        type="button"
        className="w-full bg-red_orange text-slate-200 p-4 rounded-full border border-black"
        onClick={handleClearCartButton}
      >
        Start New Order
      </button>
    </div>
  );
}

export default ConfirmationModal;

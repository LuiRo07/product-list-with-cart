import React from "react";
import tiramisuThumbnail from "/images/image-tiramisu-thumbnail.jpg";
import orderConfirmedIcon from "/images/icon-order-confirmed.svg";

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

function CartList() {
  return (
    <li className="list-none">
      <div className="bg-rose-50 grid grid-cols-4 border-b-2">
        <div className="p-4">
          <img
            src={tiramisuThumbnail}
            alt="thumbnail image for tiramisu"
            size={20}
          />
        </div>
        <div className="col-span-2 self-center">
          <h1>Classic Tiramisu</h1>
          <span className="font-bold text-red_orange mr-3">1x</span>
          <span className="text-rose-300 font-medium">@ $5.50</span>
        </div>
        <div className="self-center">
          <span className="font-semibold">$5.50</span>
        </div>
      </div>
    </li>
  );
}

function ConfirmationModal() {
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
        <CartList />
        <CartList />
        <CartList />
      </div>
      <div className="flex justify-between bg-rose-50 mb-7 p-5">
        <h3 className="text-lg">Order Total</h3>
        <h2 className="font-extrabold text-2xl">$46.50</h2>
      </div>
      <StartNewOrderButton />
    </div>
  );
}

export default ConfirmationModal;

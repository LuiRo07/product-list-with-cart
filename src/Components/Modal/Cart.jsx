import React from "react";
import EmptyCart from "../../assets/images/illustration-empty-cart.svg";
import ConfirmOrderButton from "../UI/Buttons/ConfirmOrderButton";
import CarbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";
import RemoveItemIcon from "../../assets/images/icon-remove-item.svg";

function DefaultCart() {
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

function ActiveCart({ name, itemQuantity, price }) {
  return (
    <div className="p-3">
      <div className="w-full h-full p-3">
        <h1 className="text-red_orange font-bold text-2xl mb-8">
          Your Cart ({0})
        </h1>
        {/* cart items */}
        <div className="p-2 border-b-2 flex justify-between">
          {/* left side grid */}
          <div className="grid grid-cols-[20px_1fr_1fr] gap-x-2">
            {/* product name */}
            <h1 className="font-bold col-span-3">{name}</h1>
            {/* quantity */}
            <p className="font-bold text-red_orange">{itemQuantity}x</p>
            {/* regular price */}
            <span className="text-rose-300 font-medium">${price}</span>
            {/* total price */}
            <span className="text-rose-400 font-medium">
              ${itemQuantity * price}
            </span>
          </div>
          {/* x icon */}
          <div className="self-center">
            <img
              src={RemoveItemIcon}
              alt="X icon to remove item"
              className="p-1 rounded-full border-2"
              size={10}
            />
          </div>
        </div>
        {/* delivery type */}
        <div className="w-full p-4 bg-rose-100/50 flex justify-center my-8">
          <img
            src={CarbonNeutralIcon}
            alt="photo of tree icon"
            className="mr-2"
          />
          <p>
            This is a <span className="font-bold">carbon-neutral</span> delivery
          </p>
        </div>
        <ConfirmOrderButton />
      </div>
    </div>
  );
}

function Cart({ items }) {
  return <DefaultCart />;
}

// how can I implement a cart functionality for a product store?

export default Cart;

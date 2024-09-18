import React, { useContext } from "react";
import { CartContext } from "../../Context/cart";
import EmptyCart from "/images/illustration-empty-cart.svg";
import ConfirmOrderButton from "./ConfirmOrderButton";
import CarbonNeutralIcon from "/images/icon-carbon-neutral.svg";
import RemoveItemIcon from "/images/icon-remove-item.svg";

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

function ActiveCart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getTotalNumOfItems,
    removeItem,
  } = useContext(CartContext);

  const cartTotal = `$ ${getCartTotal().toFixed(2)}`;
  const totalItems = getTotalNumOfItems();

  return (
    <div className="p-3">
      <div className="w-full h-full p-3">
        <h1 className="text-red_orange font-bold text-2xl mb-8">
          Your Cart ({totalItems})
        </h1>
        {cartItems.map((item, index) => (
          <div className="p-2 border-b-2 flex justify-between mb-2" key={index}>
            <div className="grid grid-cols-[20px_1fr_1fr] gap-x-2">
              <h1 className="font-bold col-span-3">{item.name}</h1>
              <p className="font-bold text-red_orange">{item.quantity}x</p>
              <span className="text-rose-300 font-medium">
                @ {item.price.toFixed(2)}
              </span>
              <span className="text-rose-200 font-medium">
                {"$ " + `${(item.price * item.quantity).toFixed(2)}`}
              </span>
            </div>
            <div className="self-center">
              <img
                src={RemoveItemIcon}
                alt="X icon to remove item"
                className="p-1 rounded-full border-2"
                size={10}
                onClick={() => removeItem(item)}
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <h3>Order Total</h3>
          <h2>{cartTotal}</h2>
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

function Cart() {
  const { getCartTotal } = useContext(CartContext);

  const totalNumOfItems = getCartTotal();

  if (totalNumOfItems > 1) {
    return <ActiveCart />;
  }
  return <DefaultCart />;
}

export default Cart;

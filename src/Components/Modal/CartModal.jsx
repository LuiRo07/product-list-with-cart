import React, { useState } from "react";
import EmptyCart from "../../assets/images/illustration-empty-cart.svg";
import ConfirmOrderButton from "../UI/Buttons/ConfirmOrderButton";
import CarbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";
import CartList from "./CartList";

function Cart() {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const items = 0;

  {
    if (isActive) {
      return (
        <div className="p-3">
          <div className="w-full h-full p-3">
            <h1 className="text-red_orange font-bold text-2xl mb-8">
              Your Cart ({itemQuantity})
            </h1>
            <CartList />
            <CartList />
            <CartList />
            {/* delivery type */}
            <div className="w-full p-4 bg-rose-100/50 flex justify-center my-8">
              <img
                src={CarbonNeutralIcon}
                alt="photo of tree icon"
                className="mr-2"
              />
              <p>
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <ConfirmOrderButton />
          </div>
        </div>
      );
    } else {
      return (
        <div className="h-64 p-3">
          <div className="w-full h-full p-3">
            <h1 className="text-red_orange font-bold text-2xl mb-8">
              Your Cart ({itemQuantity})
            </h1>
            <img className="relative left-1/4 mb-6" src={EmptyCart} />
            <p className="ml-3">Your added items will appear here</p>
          </div>
        </div>
      );
    }
  }
}

export default Cart;

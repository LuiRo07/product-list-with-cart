import React, { useState, useContext } from "react";
import ConfirmOrderButton from "../UI/Buttons/ConfirmOrderButton";
import CarbonNeutralIcon from "../../assets/images/icon-carbon-neutral.svg";
import CartList from "./CartList";
import DefaultCart from "./DefaultCart";
import { CartContext } from "../../Context/context";

function ActiveCart() {
  return (
    <div className="p-3">
      <div className="w-full h-full p-3">
        <h1 className="text-red_orange font-bold text-2xl mb-8">
          Your Cart ({0})
        </h1>
        <CartList />
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

function CartModal() {
  const { cart, setCart } = useContext(CartContext);

  return <DefaultCart />;
}

export default CartModal;

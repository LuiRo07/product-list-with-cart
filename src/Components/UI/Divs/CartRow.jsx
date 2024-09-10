import React from "react";
import RemoveItemIcon from "../../../assets/images/icon-remove-item.svg";

export default function CartRowDiv({ name }) {
  return (
    <div className="p-2 border-b-2 flex justify-between">
      {/* left side grid */}
      <div className="grid grid-cols-[20px_1fr_1fr] gap-x-2">
        {/* product name */}
        <h1 className="font-bold col-span-3">{name}</h1>
        {/* quantity */}
        <p className="font-bold text-red_orange">4x</p>
        {/* regular price */}
        <span className="text-rose-300 font-medium">@$7.00</span>
        {/* total price */}
        <span className="text-rose-400 font-medium">$28.00</span>
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
  );
}

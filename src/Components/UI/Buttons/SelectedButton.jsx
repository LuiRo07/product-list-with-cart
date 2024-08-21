import React from "react";
import DecrementIcon from "../../../assets/images/icon-decrement-quantity.svg";
import IncrementIcon from "../../../assets/images/icon-increment-quantity.svg";

function SelectedButton() {
  return (
    <button
      className="flex justify-between gap-2 w-3/5 p-4 rounded-full text-white bg-orange-800"
      type="button"
    >
      <a
        className="grid items-center self-center p-1 rounded-full border size-5"
        href="#"
      >
        <img src={DecrementIcon}></img>
      </a>
      2
      <a className="self-center p-1 rounded-full border" href="#">
        <img src={IncrementIcon}></img>
      </a>
    </button>
  );
}

export default SelectedButton;

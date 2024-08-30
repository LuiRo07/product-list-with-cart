import React, { useState } from "react";
import AddToCartButton from "../Buttons/AddToCartButton";
import SelectedButton from "../Buttons/SelectedButton";

export default function ImageDiv({ image }) {
  const [buttonState, setButtonState] = useState(false);

  {
    if (buttonState) {
      return (
        <div className="flex flex-col items-center">
          <img
            className="w-full rounded-xl border-4 border-red_orange"
            src={image}
            alt={"Photo of " + image.name}
          />
          <SelectedButton />
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center">
          <img
            className="w-full rounded-xl"
            src={image}
            alt={"Photo of " + image.name}
          />
          <AddToCartButton
            setButtonState={setButtonState}
            buttonState={buttonState}
          />
        </div>
      );
    }
  }
}

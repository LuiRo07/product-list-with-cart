import React, { useState, useContext } from "react";
import cartIcon from "/images/icon-add-to-cart.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import { CartContext } from "../../Context/cart";

const desserts = [
  {
    image: {
      thumbnail: "/images/image-waffle-thumbnail.jpg",
      mobile: "/images/image-waffle-mobile.jpg",
      tablet: "/images/image-waffle-tablet.jpg",
      desktop: "/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
      mobile: "/images/image-creme-brulee-mobile.jpg",
      tablet: "/images/image-creme-brulee-tablet.jpg",
      desktop: "/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "/images/image-macaron-thumbnail.jpg",
      mobile: "/images/image-macaron-mobile.jpg",
      tablet: "/images/image-macaron-tablet.jpg",
      desktop: "/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "/images/image-tiramisu-thumbnail.jpg",
      mobile: "/images/image-tiramisu-mobile.jpg",
      tablet: "/images/image-tiramisu-tablet.jpg",
      desktop: "/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "/images/image-baklava-thumbnail.jpg",
      mobile: "/images/image-baklava-mobile.jpg",
      tablet: "/images/image-baklava-tablet.jpg",
      desktop: "/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "/images/image-meringue-thumbnail.jpg",
      mobile: "/images/image-meringue-mobile.jpg",
      tablet: "/images/image-meringue-tablet.jpg",
      desktop: "/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "/images/image-cake-thumbnail.jpg",
      mobile: "/images/image-cake-mobile.jpg",
      tablet: "/images/image-cake-tablet.jpg",
      desktop: "/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/images/image-brownie-thumbnail.jpg",
      mobile: "/images/image-brownie-mobile.jpg",
      tablet: "/images/image-brownie-tablet.jpg",
      desktop: "/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/images/image-panna-cotta-thumbnail.jpg",
      mobile: "/images/image-panna-cotta-mobile.jpg",
      tablet: "/images/image-panna-cotta-tablet.jpg",
      desktop: "/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

function AddToCartButton({ product, buttonState, setButtonState }) {
  const { addToCart } = useContext(CartContext);

  function handleButtonState() {
    setButtonState(!buttonState);
    addToCart(product);
  }

  return (
    <div className="flex justify-center">
      <button
        className="font-semibold relative bottom-8 z-10 bg-slate-100 w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black"
        onClick={handleButtonState}
      >
        <img src={cartIcon} al={"cart icon"} />
        <p>Add to Cart</p>
      </button>
    </div>
  );
}

function SelectedCardButton({
  product,
  itemQuantity,
  setItemQuantity,
  buttonState,
  setButtonState,
}) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  function decrement() {
    if (itemQuantity === 1) {
      setButtonState(!buttonState);
    } else {
      setItemQuantity((quantity) => quantity - 1);
      removeFromCart(product);
    }
  }

  function increment() {
    setItemQuantity((quantity) => quantity + 1);
    addToCart(product);
  }

  return (
    <div className="flex justify-center">
      <button
        className="relative bottom-8 z-10 flex justify-between gap-2 w-3/5 p-4 rounded-full text-white bg-orange-800"
        type="button"
      >
        <div
          className="grid items-center self-center p-1 rounded-full border size-5"
          onClick={decrement}
        >
          <img src={DecrementIcon} />
        </div>
        {itemQuantity}
        <div
          className="self-center p-1 rounded-full border"
          onClick={increment}
        >
          <img src={IncrementIcon} />
        </div>
      </button>
    </div>
  );
}

function DefaultCard({ product }) {
  const [buttonState, setButtonState] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleButtonState() {
    setButtonState(!buttonState);
  }

  return (
    <>
      <img
        className="w-full roundex-xl"
        src={product.image.mobile}
        alt={"Photo of " + product.name}
      />
      {buttonState ? (
        <SelectedCardButton
          product={product}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          buttonState={buttonState}
          setButtonState={setButtonState}
        />
      ) : (
        <AddToCartButton
          product={product}
          buttonState={buttonState}
          setButtonState={setButtonState}
        />
      )}
    </>
  );
}

function NewProductCard() {
  const [products, setProducts] = useState(desserts);

  return (
    <>
      {products.map((dessert, index) => (
        <div className="mb-10" key={index}>
          <DefaultCard product={dessert} />
          <h2 className="text-rose-500">{dessert.category}</h2>
          <h3 className="font-bold">{dessert.name}</h3>
          <p className="text-red_orange font-bold">
            ${dessert.price.toFixed(2)}
          </p>
        </div>
      ))}
    </>
  );
}

export default NewProductCard;

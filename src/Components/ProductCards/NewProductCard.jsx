import { useContext } from "react";
import IncrementIcon from "/images/icon-increment-quantity.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import { ProductContext } from "../../Context/product";

function AddToCartButton({ product }) {
  const { addQuantity } = useContext(ProductContext);

  function handleButtonState() {
    addQuantity(product);
  }

  return (
    <div className="flex justify-center">
      <button
        className="font-semibold relative bottom-8 z-10 group bg-slate-100 min-w-fit w-3/5 p-4 flex justify-center gap-3 rounded-full border border-black md:overflow-hidden md:text-sm md:gap-0 md:font-medium hover:bg-orange-800 hover:text-white transition-colors ease-in duration-600"
        onClick={handleButtonState}
      >
        <div className="mr-1 sm:mr-2">
          {/* cart icon is dynamically styled when interacted with button */}
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
              <g className="group-hover:fill-white" fill="#C73B0F" clipPath="url(#a)">
                  <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
                  <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
              </g>
              <defs>
                  <clipPath id="a">
                      <path fill="#fff" d="M.333 0h20v20h-20z"/>
                  </clipPath>
              </defs>
          </svg>
        </div>
        <p>Add to Cart</p>
      </button>
    </div>
  );
}

function SelectedCardButton({ product }) {
  const { addQuantity, subtractQuantity } = useContext(ProductContext);

  function decrement() {
    subtractQuantity(product);
  }

  function increment() {
    addQuantity(product);
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
        {product.quantity}
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

// this is where state should be rendered for product cards individually, don't touch
function DefaultCard({ product }) {
  const windowWidth = window.innerWidth;
  let imageRender;

  if (windowWidth <= 640) {
    imageRender = product.image.mobile;
  } else if (windowWidth <= 768) {
    imageRender = product.image.tablet;
  } else {
    imageRender = product.image.desktop;
  }

  return (
    <div className="mb-10">
      <div
        className={`w-full rounded-xl overflow-hidden border-2 ${
          product.buttonState ? "border-red_orange" : "border-transparent"
        }`}
      >
        <img src={imageRender} alt={"Photo of " + product.name} />
      </div>
      {product.buttonState ? (
        <SelectedCardButton product={product} />
      ) : (
        <AddToCartButton product={product} />
      )}
      <h2 className="text-rose-500">{product.category}</h2>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-red_orange font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

function NewProductCard() {
  const { products } = useContext(ProductContext);

  return (
    <>
      {products.map((dessert, index) => (
        <div className="mb-2" key={index}>
          <DefaultCard product={dessert} />
        </div>
      ))}
    </>
  );
}

export default NewProductCard;

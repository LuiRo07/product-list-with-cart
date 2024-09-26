import React, { useContext } from "react";
import NewProductCard from "./Components/ProductCards/NewProductCard";
import CartModal from "./Components/Modal/CartModal";
import { CartContext } from "./Context/cart";

function App() {
  const { showModal } = useContext(CartContext);

  return (
    <>
      <div
        id="top"
        name="top"
        className="p-10 sm:grid sm:grid-cols-6 sm:gap-6 sm:p-5 bg-rose-200/15"
      >
        <div className={`font-extrabold mb-8 text-4xl sm:col-span-4`}>
          <h1>Desserts</h1>
        </div>
        {/*  */}
        <div
          className={`flex flex-col sm:inline-grid sm:grid-cols-3 sm:gap-2 sm:col-span-4 ${
            showModal ? "opacity-25" : "opacity-100"
          }`}
        >
          <NewProductCard />
        </div>
        <div className="sm:col-span-2">
          <CartModal />
        </div>
      </div>
    </>
  );
}

export default App;

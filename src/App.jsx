import React, { useContext } from "react";
import NewProductCard from "./Components/ProductCards/NewProductCard";
import CartModal from "./Components/Modal/CartModal";
import { CartContext } from "./Context/cart";

function App() {
  const { showModal } = useContext(CartContext);

  return (
    <div>
      <div
        id="top"
        name="top"
        className={`p-10 ${showModal ? "opacity-20" : "opacity-100"}`}
      >
        <div className="font-extrabold mb-8 text-4xl">Desserts</div>
        <div className="flex flex-col">
          <NewProductCard />
        </div>
      </div>
      <CartModal />
    </div>
  );
}

export default App;

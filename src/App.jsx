import React, { useState, useEffect } from "react";
import NewProductCard from "./Components/ProductCards/NewProductCard";
import CartModal from "./Components/Modal/CartModal";

function App() {
  return (
    <>
      <div id="top" name="top" className="p-10">
        <div className="font-extrabold mb-8 text-4xl">Desserts</div>
        <div className="flex flex-col">
          <NewProductCard />
        </div>
      </div>
      <CartModal />
    </>
  );
}

export default App;

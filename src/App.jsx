import React, { useState, useEffect } from "react";
import ProductCard from "./Components/UI/ProductCard";
import CartModal from "./Components/Modal/CartModal";
import { CartContext } from "./Context/context";

function App() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([{ name: "", price: "", quantity: 0 }]);
  // Dummy data for Cart

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10">
      <div className="font-extrabold mb-8 text-4xl">Desserts</div>
      <div className="flex flex-col">
        <CartContext.Provider value={{ cart, setCart }}>
          {data.map((dessert, index) => (
            <ProductCard
              product={dessert}
              key={index}
              cart={cart}
              setCart={setCart}
            />
          ))}
          <CartModal cart={{ cart }} setCart={{ setCart }} />
        </CartContext.Provider>
      </div>
    </div>
  );
}

export default App;

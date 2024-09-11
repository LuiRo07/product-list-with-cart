import React, { useState, useEffect } from "react";
import ProductCard from "./Components/UI/ProductCard";
import Cart from "./Components/Modal/Cart";

function App() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

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
        {data.map((dessert, index) => (
          <ProductCard product={dessert} key={index} />
        ))}
        <Cart />
      </div>
    </div>
  );
}

export default App;

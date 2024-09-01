import React, { useEffect, useState } from "react";
import ProductCard from "../UI/ProductCard";

const ProductList = () => {
  const [data, setData] = useState(null);
  const activeCards = [];

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
    <>
      <div className="font-extrabold mb-8 text-4xl">Desserts</div>
      {data.map((dessert) => (
        <div className="flex flex-col">
          <ProductCard product={dessert} />
        </div>
      ))}
    </>
  );
};

export default ProductList;

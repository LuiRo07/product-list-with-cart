import React, { useState } from "react";
import ImageDiv from "./Divs/ImageDiv";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col mb-4">
      {/* assuming product is the image object */}
      <ImageDiv image={product.image.mobile} />

      <h2 className="text-rose-500">{product.category}</h2>
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-red_orange font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;

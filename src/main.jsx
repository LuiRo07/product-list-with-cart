import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./Context/cart.jsx";
import { ProductProvider } from "./Context/product.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);

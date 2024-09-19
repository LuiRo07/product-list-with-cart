import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./Context/cart.jsx";
import { ProductButtonProvider } from "./Context/productButton.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductButtonProvider>
        <App />
      </ProductButtonProvider>
    </CartProvider>
  </StrictMode>
);

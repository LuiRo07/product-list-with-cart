import React, { createContext, useContext } from "react";

export const CartContext = createContext(undefined);

export function useCartContext() {
  if (CartContext === undefined) {
    throw new Error("useCartContext must be with a CartContext");
  }
  return CartContext;
}

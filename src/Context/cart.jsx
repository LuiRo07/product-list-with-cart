import { createContext, useState, useEffect } from "react";
import { ProductContext } from "./product";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModalState = () => {
    setShowModal(!showModal);
  };

  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name
    ); // check if the item is already in the cart

    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (
            cartItem // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem // otherwise, return the cart item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.name !== item.name)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalNumOfItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const removeItem = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    setCartItems(cartItems.filter((cartItem) => cartItem.name !== item.name));
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getTotalNumOfItems,
        removeItem,
        showModal,
        setShowModal,
        handleShowModalState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

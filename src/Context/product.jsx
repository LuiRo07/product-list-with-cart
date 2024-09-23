import { createContext, useState, useContext } from "react";
import { CartContext } from "./cart";

const desserts = [
  {
    image: {
      thumbnail: "/images/image-waffle-thumbnail.jpg",
      mobile: "/images/image-waffle-mobile.jpg",
      tablet: "/images/image-waffle-tablet.jpg",
      desktop: "/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
      mobile: "/images/image-creme-brulee-mobile.jpg",
      tablet: "/images/image-creme-brulee-tablet.jpg",
      desktop: "/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-macaron-thumbnail.jpg",
      mobile: "/images/image-macaron-mobile.jpg",
      tablet: "/images/image-macaron-tablet.jpg",
      desktop: "/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-tiramisu-thumbnail.jpg",
      mobile: "/images/image-tiramisu-mobile.jpg",
      tablet: "/images/image-tiramisu-tablet.jpg",
      desktop: "/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-baklava-thumbnail.jpg",
      mobile: "/images/image-baklava-mobile.jpg",
      tablet: "/images/image-baklava-tablet.jpg",
      desktop: "/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-meringue-thumbnail.jpg",
      mobile: "/images/image-meringue-mobile.jpg",
      tablet: "/images/image-meringue-tablet.jpg",
      desktop: "/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-cake-thumbnail.jpg",
      mobile: "/images/image-cake-mobile.jpg",
      tablet: "/images/image-cake-tablet.jpg",
      desktop: "/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-brownie-thumbnail.jpg",
      mobile: "/images/image-brownie-mobile.jpg",
      tablet: "/images/image-brownie-tablet.jpg",
      desktop: "/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    quantity: 0,
    buttonState: false,
  },
  {
    image: {
      thumbnail: "/images/image-panna-cotta-thumbnail.jpg",
      mobile: "/images/image-panna-cotta-mobile.jpg",
      tablet: "/images/image-panna-cotta-tablet.jpg",
      desktop: "/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    quantity: 0,
    buttonState: false,
  },
];

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [buttonState, setButtonState] = useState(false);
  const [products, setProducts] = useState(desserts);
  const { addToCart, removeFromCart, clearCart, removeItem } = useContext(
    CartContext
  );

  const handleProductState = (product) => {
    const isItemInProducts = products.find(
      (productItem) => productItem.name === product.name
    );

    // If the item is in the cart, set it's buttonState to a boolean
    if (isItemInProducts) {
      setProducts(
        products.map(
          (productItem) =>
            productItem.name === product.name
              ? { ...productItem, buttonState: `${!product.buttonState}` }
              : productItem // else return the product itself
        )
      );
    }
  };

  const addQuantity = (product) => {
    const isItemInCart = products.find(
      (productItem) => productItem.name === product.name
    );

    if (isItemInCart) {
      setProducts(
        products.map((productItem) =>
          productItem.name === product.name
            ? {
                ...productItem,
                quantity: productItem.quantity + 1,
                buttonState: true,
              }
            : productItem
        )
      );
    }

    addToCart(product);
  };

  const subtractQuantity = (product) => {
    const isItemInCart = products.find(
      (productItem) => productItem.name === product.name
    );

    if (isItemInCart.quantity === 1) {
      setProducts(
        products.map((productItem) =>
          productItem.name === product.name
            ? {
                ...productItem,
                quantity: productItem.quantity - 1,
                buttonState: false,
              }
            : productItem
        )
      );
    } else {
      setProducts(
        products.map((productItem) =>
          productItem.name === product.name
            ? {
                ...productItem,
                quantity: productItem.quantity - 1,
              }
            : productItem
        )
      );
    }

    removeFromCart(product);
  };

  const resetProductState = () => {
    setProducts(desserts);
    clearCart();
  };

  const removeProductFromState = (product) => {
    const isItemInCart = products.find(
      (productItem) => productItem.name === product.name
    );

    if (isItemInCart) {
      setProducts(
        products.map((productItem) =>
          productItem.name === product.name
            ? { ...productItem, quantity: 0, buttonState: false }
            : productItem
        )
      );
    }
    removeItem(product);
  };

  return (
    <ProductContext.Provider
      value={{
        buttonState,
        setButtonState,
        products,
        setProducts,
        handleProductState,
        addQuantity,
        subtractQuantity,
        resetProductState,
        removeProductFromState,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

import { createContext, useState } from "react";

export const ProductButtonContext = createContext();

export const ProductButtonProvider = ({ children }) => {
  const [buttonState, setButtonState] = useState(false);

  const handleButtonState = () => {
    setButtonState(!buttonState);
  };

  return (
    <ProductButtonContext.Provider
      value={{
        buttonState,
        setButtonState,
        handleButtonState,
      }}
    >
      {children}
    </ProductButtonContext.Provider>
  );
};

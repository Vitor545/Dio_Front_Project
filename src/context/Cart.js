import PropTypes from "prop-types";
import { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  let result;
  const isCart = JSON.parse(localStorage.getItem("cart"));
  if(isCart) {
    const final = isCart.map((item) => item.quantity);
    result = final.reduce((acc, item) => acc + item);
  } else {
    result = 0
  }
  const [state, setStateGlobal] = useState({
    cart: result,
  });

  const { cart } = state;

  const context = { state, cart, setStateGlobal };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider as Provider };

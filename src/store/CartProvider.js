import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_CART_ITEM") {
        const updatedItems = state.items.concat(action.payload);
        const updatedTotalAmount = state.totalAmount + (action.payload.price * action.payload.amount);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", payload: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", payload: id });
  };

  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContex}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

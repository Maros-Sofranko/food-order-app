import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCart = (item) => {};

  const removeItemFromCart = (id) => {};

  const cartContex = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContex}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

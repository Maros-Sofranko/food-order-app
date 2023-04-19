import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onHideModal }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartContext.items.length === 0;

  const onItemAdd = (item) => {
    cartContext.addItem({...item, amount: 1});
  };

  const onItemRemove = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onAdd={onItemAdd.bind(null, item)}
            onRemove={onItemRemove.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onHideModal={onHideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideModal}>
          Close
        </button>
        {!isCartEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

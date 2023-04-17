import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

const Cart = ({onHideModal}) => {
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {[{ id: "c1", name: "Sushi", price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onHideModal={onHideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideModal}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

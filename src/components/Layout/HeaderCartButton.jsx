import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import { RiShoppingCartFill } from "react-icons/ri";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const itemsInCart = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <RiShoppingCartFill />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;

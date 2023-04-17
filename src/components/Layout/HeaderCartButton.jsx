import classes from "./HeaderCartButton.module.css";
import { RiShoppingCartFill } from "react-icons/ri";

const HeaderCartButton = ({onClick}) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <RiShoppingCartFill />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

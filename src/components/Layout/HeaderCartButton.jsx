import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import { RiShoppingCartFill } from "react-icons/ri";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const btnClasses = `${classes.button} ${isBtnHighlighted && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      console.log("CLEAR");
      clearTimeout(timer);
    };
  }, [items]);

  const itemsInCart = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <RiShoppingCartFill />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;

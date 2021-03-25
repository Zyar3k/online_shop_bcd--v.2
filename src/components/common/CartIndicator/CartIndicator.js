import styles from "./CartIndicator.module.scss";

const CartIndicator = ({ isOpen, price, cart }) => {
  return (
    <span className={!isOpen ? `${styles.isOpen}` : null}>
      <p>{cart.length === 0 ? null : `${price}$  (${cart.length})`}</p>
    </span>
  );
};

export default CartIndicator;

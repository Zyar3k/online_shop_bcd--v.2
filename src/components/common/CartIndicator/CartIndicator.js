import styles from "./CartIndicator.module.scss";

const CartIndicator = ({ isOpen }) => {
  return (
    <span className={!isOpen ? `${styles.isOpen}` : null}>
      <p>Cart (4)</p>
    </span>
  );
};

export default CartIndicator;

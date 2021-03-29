import React from "react";
import styles from "./OrderCheckout.module.scss";

const OrderCheckout = ({ price, cart }) => {
  const orderElement = cart.map((item, key) => (
    <tr key={key} className={styles.orderWrapper}>
      <td className={styles.orderTitle}>
        <p className={styles.orderName}>{item.name}</p>
        <p className={styles.orderQuantity}>x {item.quantity}</p>
      </td>
      <td className={styles.orderSubtotal}>
        <p>{item.quantity * item.price} $</p>
      </td>
    </tr>
  ));

  return (
    <>
      <table>
        <tr>
          <th>Product</th>
          <th>Subtotal</th>
        </tr>
        <>{orderElement}</>
        <tr>
          <td></td>
          <td className={styles.totalPrice}>
            <p>Total: {price} $</p>
          </td>
        </tr>
      </table>
    </>
  );
};

export default OrderCheckout;

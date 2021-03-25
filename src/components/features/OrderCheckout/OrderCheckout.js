import React from "react";
import styles from "./OrderCheckout.module.scss";

const OrderCheckout = ({ price, cart }) => {
  const orderElement = cart.map((item) => (
    <tr className={styles.orderWrapper}>
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
          <th></th>
          <th className={styles.totalPrice}>
            <p>Total: {price} $</p>
          </th>
        </tr>
      </table>
    </>
  );
};

export default OrderCheckout;

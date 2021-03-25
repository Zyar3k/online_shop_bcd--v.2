import React, { useState } from "react";
import Button from "../../common/Button/Button";
import FinalConfirm from "../FinalConfirm/FinalConfirm";
import OrderCheckout from "../OrderCheckout/OrderCheckout";

import styles from "./Checkout.module.scss";

const Checkout = ({ price, cart }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  console.log(isCorrect);
  const correct = () => setIsCorrect(true);
  // cart, products??, price
  console.log("cart: ", cart);
  console.log("price: ", price);
  return (
    <div className={styles.checkoutWrapper}>
      <h2>Checkout</h2>
      {!isCorrect ? (
        <>
          <form className={styles.checkoutFormWrapper}>
            <h3 className={styles.checkoutFormTitle}>Billing details</h3>
            <label htmlFor=''>
              First name
              <input type='text' />
            </label>
            <label htmlFor=''>
              Last name
              <input type='text' />
            </label>
            <label htmlFor=''>
              Company name (optional)
              <input type='text' />
            </label>
            <label htmlFor=''>
              Street adress
              <input type='text' />
            </label>
            <label htmlFor=''>
              Poscode / ZIP
              <input type='text' />
            </label>
            <label htmlFor=''>
              Town / City
              <input type='text' />
            </label>
            <label htmlFor=''>
              Phone
              <input type='number' />
            </label>
            <label htmlFor=''>
              Email address
              <input type='email' />
            </label>
            <label htmlFor=''>
              Order notes (optional)
              <textarea name='' id='' cols='100' rows='6'></textarea>
            </label>
          </form>
          <article className={styles.orderSummaryWrapper}>
            <OrderCheckout price={price} cart={cart} />
          </article>
          <div className={styles.buttonWrapper}>
            <Button onClick={correct}>Place order</Button>
          </div>
        </>
      ) : (
        <FinalConfirm cart={cart} price={price} />
      )}
    </div>
  );
};

export default Checkout;

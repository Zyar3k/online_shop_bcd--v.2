import React, { useState } from "react";
import Button from "../../common/Button/Button";
import FinalConfirm from "../FinalConfirm/FinalConfirm";
import OrderCheckout from "../OrderCheckout/OrderCheckout";

import styles from "./Checkout.module.scss";

const Checkout = ({ price, cart, clearCart }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const values = {
    name,
    lastName,
    company,
    street,
    postcode,
    city,
    phone,
    email,
  };

  console.log(name);
  console.log(lastName);

  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangeLastName = (event) => setLastName(event.target.value);
  const handleOnChangeCompany = (event) => setCompany(event.target.value);
  const handleOnChangeStreet = (event) => setStreet(event.target.value);
  const handleOnChangePostcode = (event) => setPostcode(event.target.value);
  const handleOnChangeCity = (event) => setCity(event.target.value);
  const handleOnChangePhone = (event) => setPhone(event.target.value);
  const handleOnChangeEmail = (event) => setEmail(event.target.value);

  const correct = () => setIsCorrect(true);
  // cart, products??, price
  // console.log("cart: ", cart);
  // console.log("price: ", price);
  return (
    <div className={styles.checkoutWrapper}>
      <h2>Checkout</h2>
      {!isCorrect ? (
        <>
          <form className={styles.checkoutFormWrapper}>
            <h3 className={styles.checkoutFormTitle}>Billing details</h3>
            <label htmlFor=''>
              First name
              <input type='text' value={name} onChange={handleOnChangeName} />
            </label>
            <label htmlFor=''>
              Last name
              <input
                type='text'
                value={lastName}
                onChange={handleOnChangeLastName}
              />
            </label>
            <label htmlFor=''>
              Company name (optional)
              <input
                type='text'
                value={company}
                onChange={handleOnChangeCompany}
              />
            </label>
            <label htmlFor=''>
              Street adress
              <input
                type='text'
                value={street}
                onChange={handleOnChangeStreet}
              />
            </label>
            <label htmlFor=''>
              Postcode / ZIP
              <input
                type='text'
                value={postcode}
                onChange={handleOnChangePostcode}
              />
            </label>
            <label htmlFor=''>
              Town / City
              <input type='text' value={city} onChange={handleOnChangeCity} />
            </label>
            <label htmlFor=''>
              Phone
              <input
                type='number'
                value={phone}
                onChange={handleOnChangePhone}
              />
            </label>
            <label htmlFor=''>
              Email address
              <input
                type='email'
                value={email}
                onChange={handleOnChangeEmail}
              />
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
        <FinalConfirm
          values={values}
          cart={cart}
          price={price}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Checkout;

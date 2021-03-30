import React, { useState } from "react";
import Button from "../../common/Button/Button";
import PageTitle from "../../common/PageTitle/PageTitle";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
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

  console.log(isCorrect);

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

  const handleOnChangeName = (event) => setName(event.target.value);
  const handleOnChangeLastName = (event) => setLastName(event.target.value);
  const handleOnChangeCompany = (event) => setCompany(event.target.value);
  const handleOnChangeStreet = (event) => setStreet(event.target.value);
  const handleOnChangePostcode = (event) => setPostcode(event.target.value);
  const handleOnChangeCity = (event) => setCity(event.target.value);
  const handleOnChangePhone = (event) => setPhone(event.target.value);
  const handleOnChangeEmail = (event) => setEmail(event.target.value);

  const onChanges = {
    handleOnChangeName,
    handleOnChangeLastName,
    handleOnChangeCompany,
    handleOnChangeStreet,
    handleOnChangePostcode,
    handleOnChangeCity,
    handleOnChangePhone,
    handleOnChangeEmail,
  };

  const handleOnsubmit = () => {
    correct();
  };

  const correct = () => {
    setIsCorrect(true);
  };

  return (
    <div className={styles.checkoutWrapper}>
      <PageTitle>Checkout</PageTitle>
      {!isCorrect ? (
        <>
          <CheckoutForm
            values={values}
            onChanges={onChanges}
            price={price}
            cart={cart}
            handleOnsubmit={handleOnsubmit}
          />
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

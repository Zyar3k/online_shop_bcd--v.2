import Button from "../../common/Button/Button";
import OrderCheckout from "../OrderCheckout/OrderCheckout";
import styles from "./CheckoutForm.module.scss";

import { useForm } from "react-hook-form";

const CheckoutForm = ({
  values,
  onChanges,
  price,
  cart,
  correct,
  handleOnsubmit,
}) => {
  const {
    name,
    lastName,
    company,
    street,
    postcode,
    city,
    phone,
    email,
  } = values;
  const {
    handleOnChangeName,
    handleOnChangeLastName,
    handleOnChangeCompany,
    handleOnChangeStreet,
    handleOnChangePostcode,
    handleOnChangeCity,
    handleOnChangePhone,
    handleOnChangeEmail,
  } = onChanges;
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      <article className={styles.orderSummaryWrapper}>
        <OrderCheckout price={price} cart={cart} />
      </article>
      <form
        className={styles.checkoutFormWrapper}
        onSubmit={handleSubmit(handleOnsubmit)}
      >
        <h2 className={styles.checkoutFormTitle}>Billing details</h2>
        <label htmlFor='' className={errors.name && styles.notValid}>
          <p>
            First name
            {errors.name && <strong>*</strong>}
          </p>
          {/* {errors.name && <p>This field is required</p>} */}
          <input
            name='name'
            type='text'
            value={name}
            onChange={handleOnChangeName}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor='' className={errors.lastName && styles.notValid}>
          <p>Last name{errors.lastName && <strong>*</strong>}</p>
          <input
            name='lastName'
            type='text'
            value={lastName}
            onChange={handleOnChangeLastName}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor=''>
          <p>Company name (optional)</p>
          <input type='text' value={company} onChange={handleOnChangeCompany} />
        </label>
        <label htmlFor='' className={errors.street && styles.notValid}>
          <p>Street adress{errors.name && <strong>*</strong>}</p>
          <input
            name='street'
            type='text'
            value={street}
            onChange={handleOnChangeStreet}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor='' className={errors.postcode && styles.notValid}>
          <p>Postcode / ZIP{errors.postcode && <strong>*</strong>}</p>
          <input
            name='postcode'
            type='text'
            value={postcode}
            onChange={handleOnChangePostcode}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor='' className={errors.city && styles.notValid}>
          <p>Town / City{errors.city && <strong>*</strong>}</p>
          <input
            name='city'
            type='text'
            value={city}
            onChange={handleOnChangeCity}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor='' className={errors.phone && styles.notValid}>
          <p>Phone{errors.phone && <strong>*</strong>}</p>
          <input
            name='phone'
            type='number'
            value={phone}
            onChange={handleOnChangePhone}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor='' className={errors.email && styles.notValid}>
          <p>Email address{errors.email && <strong>*</strong>}</p>
          <input
            name='email'
            type='email'
            value={email}
            onChange={handleOnChangeEmail}
            ref={register({ required: true })}
          />
        </label>
        <label htmlFor=''>
          <p>Order notes (optional)</p>
          <textarea name='' id='' cols='100' rows='6'></textarea>
        </label>
        <div className={styles.buttonWrapper}>
          <Button type='submit'>Place order</Button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;

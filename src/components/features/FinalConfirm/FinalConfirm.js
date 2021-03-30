import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";
import styles from "./FinalConfirm.module.scss";

const FinalConfirm = ({ cart, price, clearCart, values }) => {
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
  const clearCartTest = () => {
    clearCart();
  };

  const today = () => {
    const date = new Date();
    const day = date.getDate();
    let month = date.getMonth();
    month += 1;
    const year = date.getFullYear();
    const todayDate = `${day} / ${month} / ${year}`;

    return todayDate;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order number</th>
            <th>Order date</th>
            <th>Total</th>
            <th>Payment method</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.orderConfirm}>
            <td>
              <p>#{Math.floor(Math.random() * 1000)}</p>
            </td>
            <td>
              <p>{today()}</p>
            </td>
            <td>
              <p>{price} $</p>
            </td>
            <td>
              <p>Cash on delivery</p>
            </td>
          </tr>
        </tbody>
      </table>

      <article className={styles.customerInfo}>
        <div className={styles.leftSide}>
          <h3 className={styles.addressTitle}>Customer</h3>
          <h3 className={styles.addressTitle}>Adress</h3>
          <h3 className={styles.addressTitle}>Phone</h3>
          <h3 className={styles.addressTitle}>Email</h3>
        </div>
        <div className={styles.rightSide}>
          <p>
            {name} {lastName}
          </p>
          <div className={styles.address}>
            <p>{street}</p>
            <p>{postcode}</p>
            <p>{city}</p>
          </div>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </article>

      <h3 className={styles.thanks}>
        Thank you for your order, please click the button below to confirm. We
        will send a confirmation to your email address: <span>{email}</span>
      </h3>
      <div className={styles.confirmWrapper}>
        <Link to='/'>
          <Button onClick={clearCartTest}>Order</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinalConfirm;

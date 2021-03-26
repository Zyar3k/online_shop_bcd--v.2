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
        <tr>
          <th>Order number</th>
          <th>Order date</th>
          <th>Total</th>
          <th>Payment method</th>
        </tr>
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
      </table>

      <table>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Street</th>
          <th>Poscode</th>
          <th>City</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{lastName}</td>
          <td>{street}</td>
          <td>{postcode}</td>
          <td>{city}</td>
          <td>{phone}</td>
          <td>{email}</td>
        </tr>
      </table>
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

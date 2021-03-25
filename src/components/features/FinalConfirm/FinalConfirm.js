import { Link } from "react-router-dom";

import Button from "../../common/Button/Button";
import styles from "./FinalConfirm.module.scss";

const FinalConfirm = ({ cart, price, clearCart }) => {
  // console.log(cart);
  // console.log(price);
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
      <h3 className={styles.thanks}>
        Thank you for your order, please click the button below to confirm
      </h3>
      <Link to='/'>
        <Button onClick={clearCartTest}>Order</Button>
      </Link>
    </div>
  );
};

export default FinalConfirm;

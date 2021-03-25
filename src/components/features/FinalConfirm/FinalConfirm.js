import Button from "../../common/Button/Button";
import styles from "./FinalConfirm.module.scss";

const FinalConfirm = ({ cart, price }) => {
  console.log(cart);
  console.log(price);
  const clearCart = (cart) => {
    cart = [];
    price = 0;
    console.log("cart", cart);
    console.log("price", price);
    // console.log("clear");
  };
  return (
    <div>
      <table>
        <tr>
          <th>Order number</th>
          <th>Date</th>
          <th>Total</th>
          <th>Payment method</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
          <td>94</td>
        </tr>
      </table>
      <h3>
        Thank you for your order, please click the button below to confirm
      </h3>
      <div>
        <Button onClick={clearCart}>Order</Button>
      </div>
    </div>
  );
};

export default FinalConfirm;

import React from "react";
import Button from "../../common/Button/Button";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import ProductInCart from "../ProductInCart/ProductInCart";

import styles from "./Cart.module.scss";

class Cart extends React.Component {
  render() {
    return (
      <>
        <h1>Your cart</h1>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <ProductInCart />
          <ProductInCart />
          <ProductInCart />
        </table>
        <article className={styles.summaryWrapper}>
          <span>
            <ButtonBack />
          </span>
          <div className={styles.checkoutWrapper}>
            <h2>Summary</h2>
            <h3>Total price: 2$</h3>
            <Button>Proceed to checkout</Button>
          </div>
        </article>
      </>
    );
  }
}

export default Cart;

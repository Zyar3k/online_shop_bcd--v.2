import React from "react";
import Button from "../../common/Button/Button";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import PendingInfo from "../../common/PendingInfo/PendingInfo";
import ProductInCart from "../ProductInCart/ProductInCart";

import styles from "./Cart.module.scss";

class Cart extends React.Component {
  deleteProduct = (id) => {
    const { deleteProduct } = this.props;
    deleteProduct(id);
  };
  render() {
    const { cart } = this.props;
    console.log("cart: ", cart);
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
          {cart.length !== 0 ? (
            cart.map((item) => (
              <ProductInCart
                key={item._id}
                products={item}
                deleteProduct={this.deleteProduct}
              />
            ))
          ) : (
            <PendingInfo></PendingInfo>
          )}
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

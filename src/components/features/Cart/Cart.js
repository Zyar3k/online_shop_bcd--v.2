import React from "react";
import Button from "../../common/Button/Button";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import PendingInfo from "../../common/PendingInfo/PendingInfo";
import ProductInCart from "../ProductInCart/ProductInCart";

import styles from "./Cart.module.scss";

class Cart extends React.Component {
  deleteProduct = (id) => {
    const { deleteProduct, calculatePrice } = this.props;
    deleteProduct(id);
  };

  removeProduct = (products) => {
    const { removeProduct, calculatePrice } = this.props;
    products.quantity === 1 ? void 0 : removeProduct(products._id);
    calculatePrice();
  };

  plusProduct = (id) => {
    const { plusProduct, calculatePrice } = this.props;
    plusProduct(id);
    calculatePrice();
  };
  render() {
    const { cart, price } = this.props;
    return (
      <>
        <h1>Your cart</h1>
        {cart.length !== 0 ? (
          <>
            <table>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              {cart.map((item) => (
                <ProductInCart
                  key={item._id}
                  products={item}
                  deleteProduct={this.deleteProduct}
                  plusProduct={this.plusProduct}
                  removeProduct={this.removeProduct}
                />
              ))}
            </table>
            <article className={styles.summaryWrapper}>
              <span>
                <ButtonBack />
              </span>
              <div className={styles.checkoutWrapper}>
                <h2>Summary</h2>
                <h3>Total price: {price}$</h3>
                <Button>Proceed to checkout</Button>
              </div>
            </article>
          </>
        ) : (
          <PendingInfo>is empty</PendingInfo>
        )}
      </>
    );
  }
}

export default Cart;

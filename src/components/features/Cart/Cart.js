import React from "react";
import ProductInCart from "../ProductInCart/ProductInCart";

class Cart extends React.Component {
  render() {
    return (
      <div>
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
        <h2>Summary</h2>
        <div>Total price: 2$</div>
        <button>back</button>
        <button>Proceed to checkout</button>
      </div>
    );
  }
}

export default Cart;

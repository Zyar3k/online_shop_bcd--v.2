import React from "react";

import styles from "./ProductCartCounter.module.scss";

class ProductCartCounter extends React.Component {
  plusProduct = () => {
    const { products, plusProduct } = this.props;
    // console.log(products._id);
    plusProduct(products._id);
  };

  removeProduct = () => {
    const { products, removeProduct } = this.props;
    removeProduct(products);
  };

  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div className={styles.cartCounterWrapper}>
        <div className={styles.productQuantity}>{products.quantity}</div>
        <div className={styles.upDownWrapper}>
          <div onClick={this.plusProduct} className={styles.productQuantityUp}>
            <i className='fas fa-sort-up'></i>
          </div>
          <div
            onClick={this.removeProduct}
            className={styles.productQuantityDown}
          >
            <i className='fas fa-sort-down'></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCartCounter;

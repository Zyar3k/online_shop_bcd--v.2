import React from "react";

import styles from "./ProductCartCounter.module.scss";

class ProductCartCounter extends React.Component {
  render() {
    return (
      <div className={styles.cartCounterWrapper}>
        <div className={styles.productQuantity}>1</div>
        <div className={styles.upDownWrapper}>
          <div className={styles.productQuantityUp}>
            <i className='fas fa-sort-up'></i>
          </div>
          <div className={styles.productQuantityDown}>
            <i className='fas fa-sort-down'></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCartCounter;

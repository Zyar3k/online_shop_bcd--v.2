import React from "react";
import styles from "./ProductsAmount.modules.scss";

const ProductsAmount = ({ quantity }) => {
  return (
    <div className={styles.productsAmount}>
      <h2>Products available: {quantity > 0 ? quantity : "0"}</h2>
    </div>
  );
};

export default ProductsAmount;

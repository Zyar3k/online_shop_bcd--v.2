import React from "react";
import ProductsList from "../ProductsList/ProductsList";

import styles from "./Products.module.scss";

class Products extends React.Component {
  render() {
    return (
      <main className={styles.products}>
        <ProductsList />
      </main>
    );
  }
}

export default Products;

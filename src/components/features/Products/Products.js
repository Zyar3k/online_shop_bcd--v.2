import React from "react";
import ProductsList from "../ProductsList/ProductsList";

import styles from "./Products.module.scss";

class Products extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <main className={styles.products}>
        <ProductsList products={products} />
      </main>
    );
  }
}

export default Products;

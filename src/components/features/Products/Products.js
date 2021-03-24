import React from "react";
import ProductsList from "../ProductsList/ProductsList";

import styles from "./Products.module.scss";

class Products extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    const { products, request } = this.props;
    if (
      request.success === true &&
      request.pending === false &&
      products.length > 0
    ) {
      return (
        <main className={styles.products}>
          <ProductsList products={products} />
        </main>
      );
    } else if (request.pending === true || request.success === null) {
      return "Loader";
    } else if (request.pending === false && request.error !== null) {
      return "pending";
    } else if (
      request.pending === false &&
      request.success === true &&
      products.length === 0
    ) {
      return "pending";
    }
  }
}

export default Products;

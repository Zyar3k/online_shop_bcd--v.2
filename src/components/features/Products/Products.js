import React from "react";
import Loader from "../../common/Loader/Loader";
import PendingInfo from "../../common/PendingInfo/PendingInfo";
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
      return <Loader />;
    } else if (request.pending === false && request.error !== null) {
      return <PendingInfo>{request.error}</PendingInfo>;
    } else if (
      request.pending === false &&
      request.success === true &&
      products.length === 0
    ) {
      return <PendingInfo>Sorry, no products available!</PendingInfo>;
    }
  }
}

export default Products;

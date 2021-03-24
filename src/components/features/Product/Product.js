import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "../../common/Button/Button";

import styles from "./Product.module.scss";

class Product extends Component {
  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  }
  handleOnClick = () => {
    console.log("click");
  };
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <article className={styles.productWrapper}>
        <div className={styles.imgWrapper}>
          <img src={products[0].img} alt='img' />
          <p className={styles.productTag}>{products[0].tag}</p>
        </div>
        <div className={styles.descriptionWrapper}>
          <h2 className={styles.productName}>{products[0].name}</h2>
          <p className={styles.description}>{products[0].description}</p>
          <h2>Price: {products[0].price}$</h2>
          <div className={styles.buttonsWrapper}>
            <Button onClick={this.handleOnClick} disabled={false}>
              Back
            </Button>
            <Button onClick={this.handleOnClick}>Add to cart</Button>
            <Button onClick={this.handleOnClick}>Remove from cart</Button>
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter((props) => <Product {...props} />);

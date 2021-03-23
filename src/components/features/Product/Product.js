import React, { Component } from "react";

import img from "../../../images/img01.jpg";
import Button from "../../common/Button/Button";

import styles from "./Product.module.scss";

class Product extends Component {
  handleOnClick = () => {
    console.log("click");
  };
  render() {
    return (
      <article className={styles.productWrapper}>
        <div className={styles.imgWrapper}>
          <img src={img} alt='img' />
          <p className={styles.productTag}>last one</p>
        </div>
        <div className={styles.descriptionWrapper}>
          <h2 className={styles.productName}>Handmade Birthday Card</h2>
          <p className={styles.description}>
            handmade card with die cut butterfly attached on embossed base. both
            sentiments are hand stamped. left blank inside for your own personal
            message. perfect for mother’s day, birthday or just because!
          </p>
          <h2>Price: 6.5$</h2>
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

export default Product;

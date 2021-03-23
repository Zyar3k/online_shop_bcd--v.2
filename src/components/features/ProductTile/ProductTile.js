import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductTile.module.scss";

import img from "../../../images/img01.jpg";

class ProductTile extends React.Component {
  render() {
    return (
      <Link className={styles.productLink} to={`product/:id`}>
        <article className={styles.productTile}>
          <div className={styles.productImgWrapper}>
            <img src={img} alt='img' />
            <p className={styles.productTag}>last one</p>
            <h2 className={styles.productName}>Handmade Birthday Card</h2>
            <h3 className={styles.productPrice}>6.5 $</h3>
          </div>
        </article>
      </Link>
    );
  }
}

export default ProductTile;

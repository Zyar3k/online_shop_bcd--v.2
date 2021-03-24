import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProductTile.module.scss";

class ProductTile extends React.Component {
  render() {
    const { tag, img, name, price } = this.props;
    return (
      <Link className={styles.productLink} to={`product/:id`}>
        <article className={styles.productTile}>
          <div className={styles.productImgWrapper}>
            <img src={img} alt='img' />
            {tag ? <p className={styles.productTag}>{tag}</p> : null}
            <h2 className={styles.productName}>{name}</h2>
            <h3 className={styles.productPrice}>{price} $</h3>
          </div>
        </article>
      </Link>
    );
  }
}

export default ProductTile;

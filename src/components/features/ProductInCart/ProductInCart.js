import React from "react";
import ProductCartCounter from "../ProductCartCounter/ProductCartCounter";

import styles from "./ProductInCart.module.scss";

import img from "../../../images/img01.jpg";

const ProductInCart = () => {
  return (
    <tr>
      <td className={styles.delete}>
        <button>X</button>
      </td>
      <td className={styles.imgWrapper}>
        <img src={img} alt='img' />
      </td>
      <td>Handmade Birthday Card</td>
      <td>4,45$</td>
      <td>
        <ProductCartCounter />
      </td>
    </tr>
  );
};

export default ProductInCart;

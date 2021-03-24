import React from "react";
import ProductCartCounter from "../ProductCartCounter/ProductCartCounter";

import styles from "./ProductInCart.module.scss";

const ProductInCart = (props) => {
  const { products, deleteProduct } = props;

  return (
    <tr>
      <td className={styles.delete}>
        <button onClick={deleteProduct}>X</button>
      </td>
      <td className={styles.imgWrapper}>
        <img src={products.img} alt='img' />
      </td>
      <td>{products.name}</td>
      <td>{products.price}$</td>
      <td>
        <ProductCartCounter />
      </td>
    </tr>
  );
};

export default ProductInCart;

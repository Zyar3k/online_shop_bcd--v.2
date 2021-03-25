import React from "react";
import ProductCartCounter from "../ProductCartCounter/ProductCartCounter";

import styles from "./ProductInCart.module.scss";

const ProductInCart = (props) => {
  const { products, deleteProduct, plusProduct, removeProduct } = props;

  const handleOnClick = () => {
    deleteProduct(products._id);
  };

  const subtotal = () => {
    const counting = products.price * products.quantity;
    const score = parseFloat(counting.toFixed(2));
    return score;
  };

  return (
    <tr>
      <td className={styles.delete}>
        <button onClick={handleOnClick}>X</button>
      </td>
      <td className={styles.imgWrapper}>
        <img src={products.img} alt='img' />
      </td>
      <td className={styles.productName}>{products.name}</td>
      <td>
        <strong>{products.price}$</strong>
      </td>
      <td>
        <ProductCartCounter
          products={products}
          deleteProduct={deleteProduct}
          plusProduct={plusProduct}
          removeProduct={removeProduct}
        />
      </td>
      <td>
        <strong>{subtotal()} $</strong>
      </td>
    </tr>
  );
};

export default ProductInCart;

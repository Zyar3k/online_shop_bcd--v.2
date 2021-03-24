import React from "react";
import ProductCartCounter from "../ProductCartCounter/ProductCartCounter";

const ProductInCart = () => {
  return (
    <tr>
      <th>
        <button>delete</button>
      </th>
      <th>
        <img src='' alt='img' />
      </th>
      <th>Handmade Birthday Card</th>
      <th>4,45$</th>
      <th>
        <ProductCartCounter />
      </th>
    </tr>
  );
};

export default ProductInCart;

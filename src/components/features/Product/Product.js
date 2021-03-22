import React, { Component } from "react";

import img from "../../../images/img01.jpg";

import styles from "./Product.module.scss";

class Product extends Component {
  render() {
    return (
      <div>
        <img src={img} alt='img' />
        <p>last one</p>
        <h2>Handmade Birthday Card</h2>
        <p>
          handmade card with die cut butterfly attached on embossed base. both
          sentiments are hand stamped. left blank inside for your own personal
          message. perfect for mother’s day, birthday or just because!
        </p>
        <h3>6.5</h3>
        <button>Back</button>
        <button>Add to cart</button>
        <button>Remove to cart</button>
      </div>
    );
  }
}

export default Product;

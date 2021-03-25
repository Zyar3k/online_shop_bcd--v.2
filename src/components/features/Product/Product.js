import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "../../common/Button/Button";
import ButtonBack from "../../common/ButtonBack/ButtonBack";
import Loader from "../../common/Loader/Loader";

import styles from "./Product.module.scss";

class Product extends Component {
  componentDidMount() {
    const { loadProducts, match, cart } = this.props;
    loadProducts(match.params.id);
    this.isInCart();
  }

  state = {
    inCart: false,
  };

  inCart = () => {
    this.setState({ inCart: true });
  };
  notInCart = () => {
    this.setState({ inCart: false });
  };

  addProductToCart = () => {
    const { products, cart, addProductCart, calculatePrice } = this.props;
    const match = this.props.match.params.id;
    const prepCart = cart.filter((item) => item._id === match);
    this.inCart();
    prepCart.length === 0 ? addProductCart(products[0]) : this.inCart();
    calculatePrice();
  };

  deleteProduct = (_id) => {
    const { deleteProduct, products, calculatePrice } = this.props;
    this.notInCart();
    deleteProduct(products[0]._id);
    calculatePrice();
  };

  isInCart = () => {
    const { cart } = this.props;
    const match = this.props.match.params.id;
    const prepCart = cart.filter((item) => item._id === match);
    prepCart.length !== 0 ? this.inCart() : this.notInCart();
  };

  componentDidUpdate() {
    console.log("cart in extension: ", this.props.cart);
  }

  render() {
    const { products, request } = this.props;

    if (
      request.success === true &&
      request.pending === false &&
      products.length > 0
    ) {
      return (
        <article className={styles.productWrapper}>
          <div className={styles.imgWrapper}>
            <img src={`../../${products[0].img}`} alt='img' />
            <p className={styles.productTag}>{products[0].tag}</p>
          </div>
          <div className={styles.descriptionWrapper}>
            <h2 className={styles.productName}>{products[0].name}</h2>
            <p className={styles.description}>{products[0].description}</p>
            <h2>Price: {products[0].price}$</h2>
            <div className={styles.buttonsWrapper}>
              <ButtonBack />
              {/* <Button
                onClick={this.deleteProduct}
                // onClick={this.removeProduct}
                disabled={!this.state.inCart ? true : false}
              >
                Remove from cart
              </Button> */}
              {!this.state.inCart ? null : <h3>Product in cart</h3>}
              <Button
                onClick={this.addProductToCart}
                disabled={this.state.inCart ? true : false}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </article>
      );
    } else if (request.pending === true || request.success === null) {
      return <Loader />;
    } else if (request.pending === false && request.error !== null) {
      return <p>{request.error}</p>;
    } else if (
      request.pending === false &&
      request.success === true &&
      products.length === 0
    ) {
      return <p>no products available</p>;
    }
  }
}

export default withRouter((props) => <Product {...props} />);

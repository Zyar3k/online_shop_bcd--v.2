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
    console.log(cart);
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
    const { products, cart, addProductCart } = this.props;
    const match = this.props.match.params.id;
    const prepCart = cart.filter((item) => item.id === match);
    this.inCart();
    prepCart.length === 0 ? addProductCart(products[0]) : this.inCart();
  };

  removeFromCart = () => {
    this.notInCart();
  };

  isInCart = () => {
    const { cart } = this.props;
    console.log(cart);
    const match = this.props.match.params.id;
    console.log(match);
    const prepCart = cart.filter((item) => item._id === match);
    prepCart.length !== 0 ? this.inCart() : this.notInCart();
  };

  render() {
    const { products, request } = this.props;

    console.log(products);
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
              {/* <Button onClick={this.handleOnClick} disabled={false}>
                Back
              </Button> */}
              <Button
                onClick={this.addProductToCart}
                disabled={this.state.inCart ? true : false}
              >
                Add to cart
              </Button>
              <Button
                onClick={this.removeFromCart}
                disabled={this.state.inCart ? false : true}
              >
                Remove from cart
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

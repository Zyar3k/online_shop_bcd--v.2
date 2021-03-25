import { connect } from "react-redux";
import { getCart, getPrice, clearCart } from "../../../redux/productRedux";

import Checkout from "./Checkout";

const mapStateToProps = (state) => ({
  cart: getCart(state),
  price: getPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

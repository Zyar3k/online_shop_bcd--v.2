import { connect } from "react-redux";
import { getCart, deleteCartProduct } from "../../../redux/productRedux";

import Cart from "./Cart";

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteCartProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

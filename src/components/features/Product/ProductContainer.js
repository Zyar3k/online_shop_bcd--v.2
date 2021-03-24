import { connect } from "react-redux";
import {
  getProduct,
  loadProductRequest,
  getCart,
  getRequest,
  addProductCart,
  deleteCartProduct,
  calculatePrice,
  // plusProductCart,
} from "../../../redux/productRedux";
import Product from "./Product";

const mapStateToProps = (state) => ({
  products: getProduct(state),
  request: getRequest(state),
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: (id) => dispatch(loadProductRequest(id)),
  addProductCart: (payload) => dispatch(addProductCart(payload)),
  deleteProduct: (id) => dispatch(deleteCartProduct(id)),
  // plusProductCart: (id) => dispatch(plusProductCart(id)),
  calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

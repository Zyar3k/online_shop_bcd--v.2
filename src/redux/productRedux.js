import axios from "axios";
import { API_URL } from "../config";

const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getProducts = ({ products }) => products.data;
export const getProduct = ({ products }) => products.product;

export const getAmountOfProducts = ({ products }) => products.data.length;

export const getCart = ({ products }) => products.cart;

export const getRequest = ({ products }) => products.request;

export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
export const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");

export const ADD_PRODUCT_CART = createActionName("ADD_PRODUCT_CART");
export const PLUS_PRODUCT_CART = createActionName("PLUS_PRODUCT_CART");
export const DELETE_CART_PRODUCT = createActionName("DELETE_CART_PRODUCT");

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = (payload) => ({ payload, type: LOAD_PRODUCT });

export const addProductCart = (payload) => ({
  payload,
  type: ADD_PRODUCT_CART,
});
export const plusProductCart = (id) => ({ id, type: PLUS_PRODUCT_CART });
export const deleteCartProduct = (payload) => ({
  payload,
  type: DELETE_CART_PRODUCT,
});

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

const initialState = {
  data: [],
  product: [],
  cart: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

export const loadProductsRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (error) {
      dispatch(errorRequest(error.message));
    }
  };
};

export const loadProductRequest = (id) => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/product/${id}`);
      dispatch(loadProduct(res.data));
      dispatch(endRequest());
    } catch (error) {
      dispatch(errorRequest(error.message));
    }
  };
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    /* product */
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_PRODUCT:
      return { ...statePart, product: action.payload };

    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: false },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false },
      };
    case ADD_PRODUCT_CART:
      const productAdded = action.payload;
      productAdded.quantity += 1;
      return {
        ...statePart,
        cart: statePart.cart.concat(productAdded),
        orderState: false,
      };
    case PLUS_PRODUCT_CART:
      const prodCartAdd = statePart.cart.find((item) => item.id === action.id);
      prodCartAdd.quantity += 1;
      const plusProdCart = statePart.cart.map((item) =>
        item.id === action.id ? prodCartAdd : item
      );
      return { ...statePart, cart: plusProdCart };
    case DELETE_CART_PRODUCT:
      const deleteCartProduct = statePart.cart.filter(
        // (item) => item.id !== action.payload
        (item) => console.log(item.id)
      );
      return { ...statePart, cart: deleteCartProduct };
    default:
      return statePart;
  }
}

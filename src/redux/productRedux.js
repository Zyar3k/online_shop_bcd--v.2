import axios from "axios";
import { API_URL } from "../config";

const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

export const getProducts = ({ products }) => products.data;
export const getProduct = ({ products }) => products.product;

export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
export const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = (payload) => ({ payload, type: LOAD_PRODUCT });

const initialState = { data: [], product: [] };

export const loadProductsRequest = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
    } catch (error) {
      dispatch(error.message);
    }
  };
};

export const loadProductRequest = (id) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/product/${id}`);
      dispatch(loadProduct(res.data));
    } catch (error) {
      dispatch(error.message);
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
    default:
      return statePart;
  }
}

import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  product: [],
  oneProduct: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function readProduct() {
    try {
      let { data } = await axios(API);
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    addProduct,
    readProduct,
    getOneProduct,
    product: state.product,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ProductsState,
} from "./types";

const initialState: ProductsState = {
  isLoading: false,
  isSuccess: false,
  products: [],
};

export const products = (state: ProductsState = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        isLoading: true,
        isSuccess: false,
        products: [],
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        products: action.payload,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};

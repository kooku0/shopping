import { ADD_CART, DELETE_CART, CartState } from "./types";
import { TProduct } from "~stores";

const initialState: CartState = {
  products: JSON.parse(window.localStorage.getItem("cart") ?? "[]"),
};

export const cart = (state: CartState = initialState, action: any) => {
  switch (action.type) {
    case ADD_CART:
      // eslint-disable-next-line no-case-declarations
      const addedProducts = state.products.concat(action.payload);
      window.localStorage.setItem("cart", JSON.stringify(addedProducts));
      return {
        products: addedProducts,
      };
    case DELETE_CART:
      // eslint-disable-next-line no-case-declarations
      const deletedProducts = state.products.filter(
        (product: TProduct) => product.id !== action.payload
      );
      window.localStorage.setItem("cart", JSON.stringify(deletedProducts));
      return {
        products: deletedProducts,
      };
    default:
      return state;
  }
};

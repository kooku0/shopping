import { TProduct } from "~stores";

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

export interface CartState {
  products: TProduct[];
}

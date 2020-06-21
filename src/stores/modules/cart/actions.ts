import { ADD_CART, DELETE_CART } from "./types";
import { TProduct } from "~stores";

export const addCart = (product: TProduct) => ({
  type: ADD_CART,
  payload: product,
});

export const deleteCart = (id: string) => ({
  type: DELETE_CART,
  payload: id,
});

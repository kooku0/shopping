import { combineReducers } from "redux";
import { products, ProductsState } from "./products";
import { cart, CartState } from "./cart";

// combine reducers to build the state
const appReducer = combineReducers({ products, cart });

export default appReducer;

export interface StoreState {
  products: ProductsState;
  cart: CartState;
}

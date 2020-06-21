import { combineReducers } from "redux";
import { products, ProductsState } from "./products";
import { cart, CartState } from "./cart";
import { coupons, CouponsState } from "./coupons";

// combine reducers to build the state
const appReducer = combineReducers({ products, cart, coupons });

export default appReducer;

export interface StoreState {
  products: ProductsState;
  cart: CartState;
  coupons: CouponsState;
}

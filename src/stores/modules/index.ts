import { combineReducers } from "redux";
import { products, ProductsState } from "./products";

// combine reducers to build the state
const appReducer = combineReducers({ products });

export default appReducer;

export interface StoreState {
  products: ProductsState;
}

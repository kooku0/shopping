import { combineReducers } from "redux";
import { products } from "./products";

// combine reducers to build the state
const appReducer = combineReducers({ products });

export default appReducer;

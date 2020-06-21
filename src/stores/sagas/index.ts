import { all } from "redux-saga/effects";

import products from "./products";
import coupons from "./coupons";

export default function* rootSaga() {
  yield all([products(), coupons()]);
}

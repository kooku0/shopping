import { put, takeEvery } from "redux-saga/effects";
import {
  GET_COUPONS,
  GET_COUPONS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "~stores";
import { getCouponsApi } from "~api/couponsApi";

export function* getCouponsInSaga() {
  try {
    const response = yield getCouponsApi();
    yield put({
      type: GET_COUPONS_SUCCESS,
      // payload: response.data.body,
      payload: response,
    });
  } catch (error) {
    yield console.error("GET_PRODUCTS_FAILURE: ", error);
    yield put({
      type: GET_PRODUCTS_FAILURE,
    });
  }
}

export default function* root() {
  yield takeEvery(GET_COUPONS, getCouponsInSaga);
}

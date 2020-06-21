import { put, takeEvery } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "~stores";
import { getProductsApi } from "~api/productsApi";

export function* getProductsInSaga() {
  try {
    const response = yield getProductsApi();
    yield put({
      type: GET_PRODUCTS_SUCCESS,
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
  yield takeEvery(GET_PRODUCTS, getProductsInSaga);
}

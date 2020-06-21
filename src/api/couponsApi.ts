import axios from "axios";
import { ApiResponse } from "./types";
import { TCoupon } from "~stores";
import coupons from "~data/coupons";
// import { API_HOST } from "~constants";

// export async function getProductsApi(): Promise<ApiResponse<TProduct[]>> {
//   return axios.get(`${API_HOST}/api/products`);
// }

export function getCouponsApi(): TCoupon[] {
  return coupons;
}

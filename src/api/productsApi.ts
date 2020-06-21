import axios from "axios";
import { ApiResponse } from "./types";
import { TProduct } from "~stores";
import productItems from "~data/productItems";
// import { API_HOST } from "~constants";

// export async function getProductsApi(): Promise<ApiResponse<TProduct[]>> {
//   return axios.get(`${API_HOST}/api/products`);
// }

export function getProductsApi(): TProduct[] {
  return productItems;
}

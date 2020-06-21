export const SET_PRODUCTS = "SET_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export type TProduct = {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
};

export interface ProductsState {
  isLoading: boolean;
  isSuccess: boolean;
  products: TProduct[];
}

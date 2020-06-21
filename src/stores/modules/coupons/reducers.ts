import {
  GET_COUPONS,
  GET_COUPONS_SUCCESS,
  GET_COUPONS_FAILURE,
  CouponsState,
} from "./types";

const initialState: CouponsState = {
  isLoading: false,
  isSuccess: false,
  coupons: [],
};

export const coupons = (state: CouponsState = initialState, action: any) => {
  switch (action.type) {
    case GET_COUPONS:
      return {
        isLoading: true,
        isSuccess: false,
        coupons: [],
      };
    case GET_COUPONS_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        coupons: action.payload,
      };
    case GET_COUPONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};

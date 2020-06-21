export const GET_COUPONS = "GET_COUPONS";
export const GET_COUPONS_SUCCESS = "GET_COUPONS_SUCCESS";
export const GET_COUPONS_FAILURE = "GET_COUPONS_FAILURE";

export type CouponType = "rate" | "amount";

export type TCoupon = {
  type: CouponType;
  title: string;
  discountAmount?: number;
  discountRate?: number;
};

export interface CouponsState {
  isLoading: boolean;
  isSuccess: boolean;
  coupons: TCoupon[];
}

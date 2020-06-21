import { ADD_CART, DELETE_CART } from "./types";
import { TProduct } from "~stores";
import Alert from "react-s-alert";

export const addCart = (product: TProduct) => {
  Alert.info(`장바구니에 담겼습니다.`, {
    position: "bottom-right",
    effect: "slide",
  });
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const deleteCart = (id: string) => {
  Alert.info(`장바구니에서 제거되었습니다.`, {
    position: "bottom-right",
    effect: "slide",
  });
  return {
    type: DELETE_CART,
    payload: id,
  };
};

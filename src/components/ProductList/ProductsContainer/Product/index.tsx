import React from "react";
import { TProduct } from "~stores";

interface ProductProps {
  product: TProduct;
  handleCart: (isCart: boolean, product: TProduct) => void;
  isCart: boolean;
}

function Product(props: ProductProps) {
  const {
    product: { title, coverImage, price, availableCoupon },
    handleCart,
    isCart,
  } = props;

  return (
    <div className="card">
      <div
        className="card-img-top"
        style={{
          background: `url('${coverImage}') no-repeat center`,
          backgroundSize: "cover",
          height: "240px",
        }}
      ></div>
      <div className="card-body">
        <h5 className="title">{title}</h5>
        <h6 className="price">{price}</h6>

        <div className="text-muted">
          <h6 className="category">
            {availableCoupon ?? true ? "쿠폰적용가능" : "쿠폰적용불가능"}
          </h6>
          <div
            className="cart btn btn-light"
            onClick={() => handleCart(isCart, props.product)}
          >
            {isCart ? "빼기" : "담기"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

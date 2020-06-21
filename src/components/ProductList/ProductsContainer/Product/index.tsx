import React from "react";
import { TProduct } from "~stores";

function Product(props: TProduct) {
  const { title, coverImage, price, score, availableCoupon } = props;
  return (
    <a href="detail.html">
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
            <button className="cart btn btn-light">담기</button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Product;

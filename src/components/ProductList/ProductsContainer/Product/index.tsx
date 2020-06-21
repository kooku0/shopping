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
            <h6 className="category">카테고리..</h6>
            <time dateTime="2019-08-20T08:30:00Z">2개월전</time>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Product;

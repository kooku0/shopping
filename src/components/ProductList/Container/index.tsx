import React from "react";
import Product from "~components/ProductList/Product";

function ProductListContainer() {
  return (
    <div className="container container-main-index">
      <h5 className="container-headline">상품 목록</h5>

      <div className="categories-group">
        <a href="categorized_index.html" className="btn btn-category">
          인기상품
        </a>
        <a href="#" className="btn btn-category">
          그림
        </a>
        <a href="#" className="btn btn-category">
          노래
        </a>
        <a href="#" className="btn btn-category">
          요리
        </a>
        <a href="#" className="btn btn-category">
          영상제작
        </a>
      </div>

      <ul className="list-products row">
        <li className="list-products-item col-12 col-md-4 col-lg-3">
          <Product />
        </li>
        <li className="list-products-item col-12 col-md-4 col-lg-3">
          <Product />
        </li>
        <li className="list-products-item col-12 col-md-4 col-lg-3">
          <Product />
        </li>
        <li className="list-products-item col-12 col-md-4 col-lg-3">
          <Product />
        </li>
        <li className="list-products-item col-12 col-md-4 col-lg-3">
          <Product />
        </li>
      </ul>
    </div>
  );
}

export default ProductListContainer;

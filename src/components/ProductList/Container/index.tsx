import React from "react";
import Category from "~components/ProductList/Category";
import ProductsContainer from "~components/ProductList/ProductsContainer";

function ProductListContainer() {
  return (
    <div className="container container-main-index">
      <h5 className="container-headline">상품 목록</h5>
      <Category />
      <ProductsContainer />
    </div>
  );
}

export default ProductListContainer;

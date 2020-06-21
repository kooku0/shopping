import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { StoreState, TProduct } from "~stores";
import Product from "~components/ProductList/ProductsContainer/Product";
import Pagination from "~components/Common/Pagination";

import "./style.scss";

function ProductsContainer() {
  const { products } = useSelector((state: StoreState) => state.products);
  const sortedProducts = useMemo(
    () => products.sort((a: TProduct, b: TProduct) => b.score - a.score),
    [products]
  );
  return (
    <>
      <ul className="list-products row">
        {sortedProducts.map((product: TProduct) => (
          <li
            className="list-products-item col-12 col-md-4 col-lg-3"
            key={product.id}
          >
            <Product {...product} />
          </li>
        ))}
      </ul>
      <div className="mx-auto">
        <Pagination />
      </div>
    </>
  );
}

export default ProductsContainer;

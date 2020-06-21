import React from "react";
import { useSelector } from "react-redux";
import { TProduct } from "~stores";
import Product from "~components/ProductList/ProductsContainer/Product";

function ProductsContainer() {
  const { products } = useSelector((state) => state.products);
  return (
    <ul className="list-products row">
      {products.map((product: TProduct) => (
        <li
          className="list-products-item col-12 col-md-4 col-lg-3"
          key={product.id}
        >
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductsContainer;

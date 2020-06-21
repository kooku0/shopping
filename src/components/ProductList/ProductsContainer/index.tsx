import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { StoreState, TProduct } from "~stores";
import Product from "~components/ProductList/ProductsContainer/Product";
import Pagination from "~components/Common/Pagination";
import usePagination from "~hooks/usePagination";
import { ITEMS_PER_PAGE } from "~constants";

function ProductsContainer() {
  const { products } = useSelector((state: StoreState) => state.products);
  const sortedProducts = useMemo(
    () => products.sort((a: TProduct, b: TProduct) => b.score - a.score),
    [products]
  );
  const {
    totalPage,
    currentPage,
    currentData,
    onClickPrev,
    onClickNext,
  } = usePagination(sortedProducts, ITEMS_PER_PAGE);
  return (
    <>
      <ul className="list-products row">
        {currentData.map((product: TProduct) => (
          <li
            className="list-products-item col-12 col-md-4 col-lg-3"
            key={product.id}
          >
            <Product {...product} />
          </li>
        ))}
      </ul>
      <Pagination
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  );
}

export default ProductsContainer;

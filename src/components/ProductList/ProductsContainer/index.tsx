import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState, TProduct, addCart, deleteCart } from "~stores";
import Product from "~components/ProductList/ProductsContainer/Product";
import Pagination from "~components/Common/Pagination";
import usePagination from "~hooks/usePagination";
import { ITEMS_PER_PAGE } from "~constants";

function ProductsContainer() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: StoreState) => state.products);
  const { products: cartProducts } = useSelector(
    (state: StoreState) => state.cart
  );
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

  const handleAddCart = (product: TProduct) => {
    dispatch(addCart(product));
  };
  const handleDeleteCart = (id: string) => {
    dispatch(deleteCart(id));
  };

  const handleCart = (isCart: boolean, product: TProduct) => {
    if (isCart) {
      dispatch(deleteCart(product.id));
    } else {
      dispatch(addCart(product));
    }
  };
  const isCart = (id: string) =>
    cartProducts.findIndex((item: TProduct) => item.id === id) === -1
      ? false
      : true;
  return (
    <>
      <ul className="list-products row">
        {currentData.map((product: TProduct) => (
          <li
            className="list-products-item col-12 col-md-4 col-lg-3"
            key={product.id}
          >
            <Product
              product={product}
              handleAddCart={handleAddCart}
              handleDeleteCart={handleDeleteCart}
              handleCart={handleCart}
              isCart={isCart(product.id)}
            />
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

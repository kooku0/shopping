import React from "react";
import { useSelector } from "react-redux";
import { StoreState, TProduct } from "~stores";
import Item from "~components/Cart/ProductInfo/Item";

function ProductInfo() {
  const { products } = useSelector((state: StoreState) => state.cart);
  return (
    <>
      <h4>Product Info</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">상품정보</th>
            <th scope="col" className="text-center">
              가격
            </th>
            <th scope="col" className="text-center">
              개수
            </th>
            <th scope="col" className="text-center">
              상품금액
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: TProduct) => (
            <Item key={product.id} {...product} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductInfo;

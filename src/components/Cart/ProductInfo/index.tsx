import React from "react";
import Item from "~components/Cart/ProductInfo/Item";

function ProductInfo() {
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
          <Item />
          <Item />
          <Item />
        </tbody>
      </table>
    </>
  );
}

export default ProductInfo;

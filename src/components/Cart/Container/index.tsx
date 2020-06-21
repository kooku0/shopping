import React, { useState } from "react";
import ProductInfo from "~components/Cart/ProductInfo";
import CouponDiscount from "~components/Cart/CouponDiscount";
import Price from "~components/Cart/Price";
import { NavLink } from "react-router-dom";
import { PAGE_PATHS } from "~constants";

import "./style.scss";

export interface PriceInfo {
  id: string;
  price: number;
  count: number;
  discount: number;
  subTotal: number;
}

function CartContainer() {
  const [pricesInfo, setPricesInfo] = useState([]);
  return (
    <div className="container container-main-index">
      <h5 className="container-headline">장바구니</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <ProductInfo pricesInfo={pricesInfo} setPricesInfo={setPricesInfo} />
        </li>
        <li className="list-group-item">
          <CouponDiscount />
        </li>
        <li className="list-group-item">
          <Price />
        </li>
      </ul>
      <hr />
      <div className="row">
        <div className="col mb-2">
          <div className="row">
            <div className="col-sm-12  col-md-6">
              <NavLink
                className="btn btn-block btn-light"
                to={PAGE_PATHS.PRODUCT_LISTS}
              >
                계속 쇼핑하기
              </NavLink>
            </div>
            <div className="col-sm-12 col-md-6 text-right">
              <button className="btn btn-lg btn-block btn-success text-uppercase">
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;

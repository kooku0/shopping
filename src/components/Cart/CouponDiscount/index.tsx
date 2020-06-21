import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { TPriceInfo } from "~components/Cart/Container";
import { StoreState } from "~stores";

interface CouponDiscountProps {
  pricesInfo: TPriceInfo[];
  setPricesInfo: Function;
}

function CouponDiscount({ pricesInfo, setPricesInfo }: CouponDiscountProps) {
  const { coupons } = useSelector((state: StoreState) => state.coupons);
  const sumDiscount = useMemo(() => {
    let sum = 0;
    pricesInfo.forEach((priceInfo: TPriceInfo) => {
      sum += priceInfo.discount;
    });
    return sum;
  }, [pricesInfo]);
  return (
    <>
      <h4>Coupon / Discount</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col">보유 쿠폰 합계</div>
            <div className="col">
              <button className="btn btn-dark">쿠폰 조회/적용</button>
            </div>
            <div className="col">-{sumDiscount}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-8">할인 합계</div>
            <div className="col-4">-{sumDiscount}</div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default CouponDiscount;

import React from "react";

function CouponDiscount() {
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
            <div className="col">-2,596</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-8">할인 합계</div>
            <div className="col-4">-2,596</div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default CouponDiscount;

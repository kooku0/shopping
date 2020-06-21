import React from "react";

function Price() {
  return (
    <>
      <h4>Price</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col" className="text-center">
              주문 금액
            </th>
            <th scope="col" className="text-center">
              보유 쿠폰 할인
            </th>
            <th scope="col" className="text-center">
              최종 결제 금액
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td className="text-center">10,300</td>
            <td className="text-center">-2,039</td>
            <td className="text-center">
              <strong>8,293</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Price;

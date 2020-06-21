import React, { useMemo } from "react";
import { PriceInfo } from "~components/Cart/Container";

interface PriceProps {
  pricesInfo: PriceInfo[];
}

function Price({ pricesInfo }: PriceProps) {
  const sumSubTotal = useMemo(() => {
    let sum = 0;
    pricesInfo.forEach((priceInfo: PriceInfo) => {
      sum += priceInfo.subTotal;
    });
    return sum;
  }, [pricesInfo]);
  const sumDiscount = useMemo(() => {
    let sum = 0;
    pricesInfo.forEach((priceInfo: PriceInfo) => {
      sum += priceInfo.discount;
    });
    return sum;
  }, [pricesInfo]);

  const totalPrice = useMemo(() => sumSubTotal - sumDiscount, [pricesInfo]);
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
            <th> </th>
            <th scope="col" className="text-center">
              보유 쿠폰 할인
            </th>
            <th> </th>
            <th scope="col" className="text-center">
              최종 결제 금액
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td className="text-center">{sumSubTotal}</td>
            <th> - </th>
            <td className="text-center">{sumDiscount}</td>
            <th> = </th>
            <td className="text-center">
              <strong>{totalPrice}</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Price;

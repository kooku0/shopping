import React, { useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState, TProduct, deleteCart } from "~stores";
import { TPriceInfo } from "~components/Cart/Container";
import Item from "~components/Cart/ProductInfo/Item";

interface ProductInfoProps {
  pricesInfo: TPriceInfo[];
  setPricesInfo: Function;
}

function ProductInfo({ pricesInfo, setPricesInfo }: ProductInfoProps) {
  const dispatch = useDispatch();
  const { products } = useSelector((state: StoreState) => state.cart);
  useEffect(() => {
    const initPriceInfo = products.map((product: TProduct) => ({
      id: product.id,
      price: product.price,
      count: 1,
      discount: 0,
      subTotal: product.price,
    }));
    setPricesInfo(initPriceInfo);
  }, [products]);
  const findPriceInfo = (id: string) =>
    pricesInfo.find(({ id: priceInfoId }) => priceInfoId === id);
  const handleProductCount = (v: ChangeEvent<HTMLInputElement>, id: string) => {
    const nextPricesInfo = [...pricesInfo];
    const priceInfo = nextPricesInfo.find(
      ({ id: priceInfoId }) => priceInfoId === id
    );
    const parsedCount = v.target.value === "" ? 0 : parseInt(v.target.value);
    if (!isNaN(parsedCount) && priceInfo) {
      priceInfo.count = parsedCount;
      priceInfo.subTotal = priceInfo.price * parsedCount;
    }

    setPricesInfo(nextPricesInfo);
  };
  const handleDeleteItem = (id: string) => {
    dispatch(deleteCart(id));
  };
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
            <Item
              key={product.id}
              {...product}
              priceInfo={findPriceInfo(product.id)}
              handleProductCount={handleProductCount}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductInfo;

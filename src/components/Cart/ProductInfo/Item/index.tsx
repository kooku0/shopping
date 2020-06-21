import React, { ChangeEvent } from "react";
import { TProduct } from "~stores";
import { PriceInfo } from "~components/Cart/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

interface ItemProps {
  priceInfo?: PriceInfo;
  handleProductCount: Function;
}

function Item(props: TProduct & ItemProps) {
  const { id, title, coverImage, priceInfo, handleProductCount } = props;

  return (
    <tr>
      <td>
        <div
          style={{
            background: `url('${coverImage}') no-repeat center`,
            backgroundSize: "cover",
            height: "50px",
            width: "50px",
          }}
        ></div>
      </td>
      <td>{title}</td>
      <td className="text-right">{priceInfo?.price} 원</td>
      <td>
        <input
          className="form-control"
          type="text"
          value={priceInfo?.count}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleProductCount(e, id)
          }
        />
      </td>
      <td className="text-right">{priceInfo?.subTotal} 원</td>
      <td className="text-right">
        <button className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default Item;

import React, { ChangeEvent } from "react";
import { TProduct } from "~stores";
import { TPriceInfo } from "~components/Cart/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

interface ItemProps {
  priceInfo?: TPriceInfo;
  handleProductCount: Function;
  handleDeleteItem: (id: string) => void;
}

function Item(props: TProduct & ItemProps) {
  const {
    id,
    title,
    coverImage,
    priceInfo,
    handleProductCount,
    handleDeleteItem,
  } = props;

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
        <div
          className="btn btn-sm btn-primary"
          onClick={() => handleDeleteItem(id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </td>
    </tr>
  );
}

export default Item;

import React from "react";
import { TProduct } from "~stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function Item(props: TProduct) {
  const { title, coverImage, price, availableCoupon } = props;
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
      <td className="text-right">{price} 원</td>
      <td>
        <input className="form-control" type="text" value="1" />
      </td>
      <td className="text-right">124,90 원</td>
      <td className="text-right">
        <button className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default Item;

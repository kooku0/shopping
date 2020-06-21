import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function Item() {
  return (
    <tr>
      <td>
        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
      </td>
      <td>Product Name Dada</td>
      <td className="text-right">124,90 원</td>

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

import React from "react";

import "./style.scss";

function Category() {
  return (
    <div className="categories-group">
      <a href="categorized_index.html" className="btn btn-category">
        인기상품
      </a>
      <a href="#" className="btn btn-category">
        그림
      </a>
      <a href="#" className="btn btn-category">
        노래
      </a>
      <a href="#" className="btn btn-category">
        요리
      </a>
      <a href="#" className="btn btn-category">
        영상제작
      </a>
    </div>
  );
}

export default Category;

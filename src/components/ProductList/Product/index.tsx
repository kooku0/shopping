import React from "react";

function Product() {
  return (
    <a href="detail.html">
      <div className="card">
        <div
          className="card-img-top"
          style={{
            background:
              "url('https://pbs.twimg.com/profile_images/794525049554251776/i4txBa-M_400x400.jpg') no-repeat center",
            backgroundSize: "cover",
            height: "240px",
          }}
        ></div>
        <div className="card-body">
          <h5 className="title">영상 촬영법을 익혀봐요</h5>
          <h6 className="price">1,00,000원</h6>

          <div className="text-muted">
            <h6 className="category">영상제작</h6>
            <time datetime="2019-08-20T08:30:00Z">2개월전</time>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Product;

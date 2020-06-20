import React from "react";
import "./style.scss";

function ProductList() {
  return (
    <>
      <nav className="navbar nav-global fixed-top navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              className="img-brand"
              alt="CLASS 101"
              width="132"
              src="https://post-phinf.pstatic.net/MjAxOTA4MTNfMjA0/MDAxNTY1NjY0MTcyNDc3.SZAgnZqF4WhKe6N3eVVtOjRcWqUDV9YhVFnUzx3zWt4g.QQetZ8F7lUydFU_iUWR5OQJi5-h3hwyofhSPnEfVm74g.PNG/%ED%81%B4%EB%9E%98%EC%8A%A4101.png?type=w1200"
            />
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="item_create.html">
                <i className="material-icons ic-create">CART</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container container-main-index">
        <h5 className="container-headline">상품 목록</h5>

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

        <ul className="list-products row">
          <li className="list-products-item col-12 col-md-4 col-lg-3">
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
          </li>
          <li className="list-products-item col-12 col-md-4 col-lg-3">
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
                  <h5 className="title">계란말이를 만들어봐요</h5>
                  <h6 className="price">20,000원</h6>

                  <div className="text-muted">
                    <h6 className="category">요리</h6>
                    <time datetime="2019-08-20T08:30:00Z">2개월전</time>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="list-products-item col-12 col-md-4 col-lg-3">
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
                  <h5 className="title">인체드로잉을 그려봐요</h5>
                  <h6 className="price">550,000원</h6>

                  <div className="text-muted">
                    <h6 className="category">그림</h6>
                    <time datetime="2019-08-20T08:30:00Z">2개월전</time>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="list-products-item col-12 col-md-4 col-lg-3">
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
                  <h5 className="title">발성연습을 익혀봐요</h5>
                  <h6 className="price">1,200,000원</h6>

                  <div className="text-muted">
                    <h6 className="category">노래</h6>
                    <time datetime="2019-08-20T08:30:00Z">2개월전</time>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="list-products-item col-12 col-md-4 col-lg-3">
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
                  <h5 className="title">발성연습을 익혀봐요</h5>
                  <h6 className="price">1,200,000원</h6>

                  <div className="text-muted">
                    <h6 className="category">노래</h6>
                    <time datetime="2019-08-20T08:30:00Z">2개월전</time>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <footer>
        <div className="container">
          <a href="index.html">2020 CLASS 101</a>
          <h6>Copyright © CLASS 101 Inc. All rights reserved.</h6>
        </div>
      </footer>
    </>
  );
}

export default ProductList;

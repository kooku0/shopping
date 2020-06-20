import React from "React";

function NavBar() {
  return (
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
  );
}

export default NavBar;

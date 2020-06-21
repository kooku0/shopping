import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PAGE_PATHS } from "~constants";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar nav-global fixed-top navbar-expand-sm">
      <div className="container">
        <NavLink
          className="nav-item nav-link navbar-brand"
          activeClassName="active"
          exact={true}
          to={PAGE_PATHS.HOME}
        >
          <img
            className="img-brand"
            alt="CLASS 101"
            width="132"
            src="https://post-phinf.pstatic.net/MjAxOTA4MTNfMjA0/MDAxNTY1NjY0MTcyNDc3.SZAgnZqF4WhKe6N3eVVtOjRcWqUDV9YhVFnUzx3zWt4g.QQetZ8F7lUydFU_iUWR5OQJi5-h3hwyofhSPnEfVm74g.PNG/%ED%81%B4%EB%9E%98%EC%8A%A4101.png?type=w1200"
          />
        </NavLink>
        <ul className="navbar-nav ml-auto">
          {pathname === PAGE_PATHS.CART ? (
            <li className="nav-item">
              <NavLink to={PAGE_PATHS.PRODUCT_LISTS}>
                <i className="material-icons ic-create">상품목록</i>
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to={PAGE_PATHS.CART}>
                <i className="material-icons ic-create">장바구니</i>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

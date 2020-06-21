import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { PAGE_PATHS } from "~constants";
import ProductList from "~pages/ProductList";
import Cart from "~pages/Cart";
import Alert from "react-s-alert";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path={PAGE_PATHS.PRODUCT_LISTS} component={ProductList} />
            <Route path={PAGE_PATHS.CART} component={Cart} />
            <Redirect from="/" to={PAGE_PATHS.PRODUCT_LISTS} />
          </Switch>
        </Router>
        <Alert stack={true} timeout={3000} />
      </>
    );
  }
}

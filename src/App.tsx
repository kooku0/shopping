import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { PAGE_PATHS } from "~constants";
import ProductList from "~pages/ProductList";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={PAGE_PATHS.PRODUCT_LISTS} component={ProductList} />
          <Redirect from="/" to={PAGE_PATHS.PRODUCT_LISTS} />
        </Switch>
      </Router>
    );
  }
}

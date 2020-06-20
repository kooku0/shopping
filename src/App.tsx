import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PAGE_PATHS } from '~constants';
import Home from '~pages/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={PAGE_PATHS.HOME} component={Home} />
          <Redirect from="/" to={PAGE_PATHS.HOME} />
        </Switch>
      </Router>
    );
  }
}

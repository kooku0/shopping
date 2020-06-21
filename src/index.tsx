import "bootstrap/dist/css/bootstrap.css";
import "~css/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootStore from "~stores/config";
import App from "./App";
import "moment/locale/ko";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

ReactDOM.render(
  <Provider store={rootStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

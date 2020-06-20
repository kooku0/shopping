import "bootstrap/dist/css/bootstrap.css";
import "~css/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootStore from "~stores/config";
import App from "./App";
import "moment/locale/ko";

ReactDOM.render(
  <Provider store={rootStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

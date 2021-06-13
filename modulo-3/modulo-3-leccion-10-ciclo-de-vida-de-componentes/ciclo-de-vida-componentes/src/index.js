import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/reset.scss";
import "./stylesheets/mixins.scss";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

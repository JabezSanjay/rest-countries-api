import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { store } from "./redux/store";

ReactDOM.render(<Routes />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

serviceWorker.unregister();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

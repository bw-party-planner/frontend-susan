import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

serviceWorker.unregister();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

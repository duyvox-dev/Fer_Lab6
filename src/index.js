import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

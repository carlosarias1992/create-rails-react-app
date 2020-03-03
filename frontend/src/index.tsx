import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import axios from "axios";

import "./index.css";

// setup axios
axios.defaults.baseURL = "http://localhost:3001";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const store = configureStore({});
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
});

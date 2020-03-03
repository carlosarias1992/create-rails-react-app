import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import axios from "axios";

import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    axios.defaults.baseURL = process.env.REACT_APP_API_URL;

    const store = configureStore({});
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
});

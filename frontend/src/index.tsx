import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

import "./index.css";

// setup axios
axios.defaults.baseURL = "http://localhost:3001";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let savedSession;
  // @ts-ignore
  if (window.currentUser) {
    savedSession = {
      // @ts-ignore
      session: { currentUser: window.currentUser.id }
    };
  } else {
    savedSession = {};
  }

  const store = configureStore(savedSession);
  ReactDOM.render(<App store={store} />, root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

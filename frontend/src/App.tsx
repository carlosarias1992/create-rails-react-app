import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Root from "./features/Root";
import { getCurrentUser } from "./utils";

import "./App.css";

// @ts-ignore
const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

const mapStateToProps = () => ({
  currentUser: getCurrentUser()
});

export default connect(mapStateToProps, null)(App);

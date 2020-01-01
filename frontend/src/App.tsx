import React from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Root from "./features/Root";
import "./App.css";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

const mapStateToProps = state => ({
  currentUser: state.session.current_user_id
});

export default connect(mapStateToProps, null)(App);

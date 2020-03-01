import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loggedIn } from "../utils";

// @ts-ignore
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = () => {
  return { loggedIn: loggedIn() };
};

// @ts-ignore
const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export default ProtectedRoute;

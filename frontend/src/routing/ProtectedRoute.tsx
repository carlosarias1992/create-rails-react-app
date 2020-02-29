import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../utils";

// @ts-ignore
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = () => {
  const currentUser = getCurrentUser();
  return { loggedIn: Boolean(currentUser.id) };
};

// @ts-ignore
const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export default ProtectedRoute;

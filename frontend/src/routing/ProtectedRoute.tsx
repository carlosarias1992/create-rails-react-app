import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.current_user_id) };
};

const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export default ProtectedRoute;

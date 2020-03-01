import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/session";

const mapStateToProps = (state: any) => {
  const { currentUser } = state.entities.session;
  return { currentUser };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout())
  };
};

const Logout = (props: any) => {
  return (
    <>
      Welcome back, {props.currentUser?.username}!
      <button onClick={props.logout}>Logout</button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

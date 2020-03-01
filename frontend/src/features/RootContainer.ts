import { connect } from "react-redux";
import Root from "./Root";
import { logout, loginAction } from "../redux/actions/session";

const mapStateToProps = (state: any) => {
  const { currentUser } = state.entities.session;
  const { errors } = state.errors;
  return { currentUser, errors };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout()),
    login: (user: any) => dispatch(loginAction(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

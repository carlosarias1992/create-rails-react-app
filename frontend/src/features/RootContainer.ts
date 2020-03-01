import { connect } from "react-redux";
import Root from "./Root";
import { logout, loginAction } from "../redux/actions/session";

const mapStateToProps = (state: any) => {
  const { currentUser } = state.entities.session;
  const sessionErrors = state.errors.session.errors || [];
  const userErrors = state.errors.users.errors || [];
  return { currentUser, errors: [...sessionErrors, ...userErrors] };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout()),
    login: (user: any) => dispatch(loginAction(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

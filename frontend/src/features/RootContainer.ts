import { connect } from "react-redux";
import Root from "./Root";
import { logoutAction, loginAction } from "../redux/actions/session";

const mapStateToProps = state => {
  const {
    entities: {
      session: { currentUser }
    },
    errors: { errors }
  } = state;
  return { currentUser, errors };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutAction()),
    login: user => dispatch(loginAction(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

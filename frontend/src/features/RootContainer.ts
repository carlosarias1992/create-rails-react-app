import { connect } from "react-redux";
import Root from "./Root";
import { logoutAction, loginAction } from "../redux/actions/session";
import { State, User } from "../types";

const mapStateToProps = (state: State) => {
  const {
    entities: {
      session: { currentUser }
    },
    errors
  } = state;
  return { currentUser, errors };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logoutAction()),
    login: (user: User) => dispatch(loginAction(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

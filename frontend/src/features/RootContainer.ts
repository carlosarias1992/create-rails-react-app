import { connect } from "react-redux";
import Root from "./Root";
import { logout, removeSessionErrors } from "../redux/actions/session";

const mapStateToProps = (state: any) => {
  const { currentUser } = state.entities.session;
  const { errors } = state.errors.session;
  return { currentUser, errors };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout()),
    removeErrors: () => {
      dispatch(removeSessionErrors());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);

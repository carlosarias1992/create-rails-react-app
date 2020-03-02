import { connect } from "react-redux";
import Logout from "./Logout";
import { logout } from "../../redux/actions/session";
import { State } from "../../types";

const mapStateToProps = (state: State) => {
  const { currentUser } = state.entities.session;
  return { currentUser };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

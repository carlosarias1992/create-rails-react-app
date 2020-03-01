import { connect } from "react-redux";
import Logout from "./Logout";
import { logout } from "../../redux/actions/session";

const mapStateToProps = state => {
  const { currentUser } = state.entities.session;
  return { currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

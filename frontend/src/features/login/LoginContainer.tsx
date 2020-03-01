import { connect } from "react-redux";
import { login } from "../../redux/actions/session";
import Login from "./Login";

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(Login);

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../redux/actions/sessions";
import Login from "./Login";

const mapStateToProps = () => {
  return { className: "login-form" };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

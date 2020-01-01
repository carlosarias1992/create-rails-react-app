import { connect } from "react-redux";
import Register from "./Register";
import { signup } from "../../redux/actions/sessions";

const mapStateToProps = state => {
  return { errors: state.errors.session.errors };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

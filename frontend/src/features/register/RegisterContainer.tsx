import { connect } from "react-redux";
import Register from "./Register";
import { signup } from "../../redux/actions/session";

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: (user: any) => {
      return dispatch(signup(user));
    }
  };
};

export default connect(null, mapDispatchToProps)(Register);

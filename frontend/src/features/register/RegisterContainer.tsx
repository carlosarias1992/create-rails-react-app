import { connect } from "react-redux";
import Register from "./Register";
import { signup } from "../../redux/actions/session";
import { User } from "../../types";

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: (user: User) => dispatch(signup(user))
  };
};

// @ts-ignore
export default connect(null, mapDispatchToProps)(Register);

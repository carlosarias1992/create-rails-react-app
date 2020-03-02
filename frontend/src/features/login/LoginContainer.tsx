import { connect } from "react-redux";
import { login } from "../../redux/actions/session";
import Login from "./Login";
import { User } from "../../types";

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (user: User) => dispatch(login(user))
  };
};

// @ts-ignore
export default connect(null, mapDispatchToProps)(Login);

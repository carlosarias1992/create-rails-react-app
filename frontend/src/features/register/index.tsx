import React from "react";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/users";

const INITIAL_STATE = {
  username: "",
  password: "",
  errors: ""
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: (user: any) => {
      return dispatch(signup(user));
    }
  };
};

class Register extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type: string) {
    return (e: { target: { value: any } }) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    // @ts-ignore
    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };

    this.props.signup({ user });
  }

  render() {
    // @ts-ignore
    const { username, password } = this.state;

    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <h3>Sign up</h3>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={this.handleInput("username")}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={this.handleInput("password")}
          />
        </label>
        <input type="submit" value="Sign Up" />
        Want to login instead? Click{" "}
        <button onClick={() => this.props.setToLoginPage(true)}>here</button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(Register);

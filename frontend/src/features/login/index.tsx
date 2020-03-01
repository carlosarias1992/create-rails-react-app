import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/session";

const INITIAL_STATE = {
  username: "",
  password: ""
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (user: any) => {
      return dispatch(login(user));
    }
  };
};

class Login extends React.Component {
  constructor(props: any) {
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

    // @ts-ignore
    this.props.login({ user });
  }

  render() {
    // @ts-ignore
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="user[username]"
            value={username}
            onChange={this.handleInput("username")}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="user[password]"
            value={password}
            onChange={this.handleInput("password")}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);

import React from "react";

const INITIAL_STATE = {
  username: "",
  password: ""
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type: string) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };

    this.props.login({ user });
  }

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
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
        Want to sign up instead? Click{" "}
        <button onClick={() => this.props.setToLoginPage(false)}>here</button>
      </form>
    );
  }
}

export default Login;

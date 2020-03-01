import React from "react";

const INITIAL_STATE = {
  username: "",
  password: "",
  errors: ""
};

class Register extends React.Component {
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

    this.props.signup({ user });
  }

  render() {
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

export default Register;

import React from "react";
import { login } from "../../api_requests/sessions";

class Login extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type: string) {
    return (e: { target: { value: any } }) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    login({ user: this.state }).then(
      response =>
        localStorage.setItem("currentUser", JSON.stringify(response.data)),
      () => this.setState({ password: "" })
    );
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

export default Login;

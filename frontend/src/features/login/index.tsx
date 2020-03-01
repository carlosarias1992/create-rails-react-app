import React from "react";
import { login } from "../../api_requests/sessions";

const INITIAL_STATE = {
  username: "",
  password: ""
};

class Login extends React.Component {
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
    login({ user: this.state }).then(
      response => {
        this.setState(INITIAL_STATE);
        localStorage.setItem("token", JSON.stringify(response.data.jwt));
      },
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

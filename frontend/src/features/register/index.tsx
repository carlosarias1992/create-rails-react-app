import React from "react";
import { signup } from "../../api_requests/sessions";

class Signup extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type: string) {
    return (e: { target: { value: any } }) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    signup({ user: this.state }).then(response =>
      localStorage.setItem("currentUser", JSON.stringify(response.data))
    );
  }

  render() {
    // @ts-ignore
    const { username, password } = this.state;

    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
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
      </form>
    );
  }
}

export default Signup;

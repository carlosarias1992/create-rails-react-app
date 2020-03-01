import React from "react";
import { signup } from "../../api_requests/sessions";

const INITIAL_STATE = {
  username: "",
  password: "",
  errors: ""
};

class Signup extends React.Component {
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

    signup({ user })
      .then(response => {
        if (!response.data.errors) {
          // @ts-ignore
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors
          });
        }
      })
      .catch(error => console.log("api errors:", error));
  }

  redirect = () => {
    // @ts-ignore
    this.props.history.push("/");
  };

  handleErrors = () => {
    return (
      <div>
        <ul>
          // @ts-ignore
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    // @ts-ignore
    const { username, password } = this.state;

    return (
      <>
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
        // @ts-ignore
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </>
    );
  }
}

export default Signup;

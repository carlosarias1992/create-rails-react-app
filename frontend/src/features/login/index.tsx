import React from "react";
import { login } from "../../api_requests/sessions";

const INITIAL_STATE = {
  username: "",
  password: "",
  errors: ""
};

class Login extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentWillMount() {
    // @ts-ignore
    return this.props.loggedInStatus ? this.redirect() : null;
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

    login(user)
      .then(response => {
        if (response.data.logged_in) {
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
        // @ts-ignore
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </>
    );
  }
}

export default Login;

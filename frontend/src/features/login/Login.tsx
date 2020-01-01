import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", failedLogin: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .login({ user: this.state })
      .then(null, () => this.setState({ password: "", failedLogin: true }));
  }

  render() {
    const { username, password } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <div className="position-relative input">
              <div className="error-display hide">
                The credentials you've entered are not valid.
              </div>
              <input
                type="text"
                name="user[username]"
                value={username}
                onChange={this.handleInput("username")}
              />
            </div>
          </label>
          <label>
            Password
            <div className="position-relative input">
              <div className="error-display hide">Enter your password.</div>
              <input
                type="password"
                name="user[password]"
                value={password}
                onChange={this.handleInput("password")}
              />
            </div>
          </label>
          <input type="submit" value="Log In" />
        </form>
      </>
    );
  }
}

export default Login;

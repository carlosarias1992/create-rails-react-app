import React from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";

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
      <>
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <FormGroup>
            <TextField
              label="Username"
              value={username}
              variant="outlined"
              size="small"
              onChange={this.handleInput("username")}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Password"
              type="password"
              value={password}
              variant="outlined"
              size="small"
              onChange={this.handleInput("password")}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </form>
        <div>Want to sign up instead?</div>
        <Button onClick={() => this.props.setToLoginPage(false)}>
          Take me to sign up
        </Button>
      </>
    );
  }
}

export default Login;

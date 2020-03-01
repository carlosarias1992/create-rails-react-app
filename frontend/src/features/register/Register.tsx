import React from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";

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
      <>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h3>Sign up</h3>
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
              value={password}
              variant="outlined"
              type="password"
              size="small"
              onChange={this.handleInput("password")}
            />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </form>
        <div>Want to login instead?</div>
        <Button onClick={() => this.props.setToLoginPage(true)}>
          Take me to login
        </Button>
      </>
    );
  }
}

export default Register;

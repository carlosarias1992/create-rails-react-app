import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import "./Register.css";

const INITIAL_STATE = {
  username: "",
  password: "",
  submitting: false
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
    this.setState({ submitting: true });

    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };

    this.props
      .signup({ user })
      .catch(() => this.setState({ submitting: false }));
  }

  render() {
    const { username, password } = this.state;

    const theme = createMuiTheme({
      palette: {
        type: "dark",
        primary: lightBlue
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h3>Sign up</h3>
          <FormGroup>
            <TextField
              className="Register--Input"
              label="Username"
              value={username}
              variant="outlined"
              size="small"
              onChange={this.handleInput("username")}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="Register--Input"
              label="Password"
              value={password}
              variant="outlined"
              type="password"
              size="small"
              onChange={this.handleInput("password")}
            />
          </FormGroup>
          <Button type="submit" disabled={this.state.submitting}>
            Sign Up
          </Button>
        </form>
        <p>Want to login instead?</p>
        <Button onClick={() => this.props.setToLoginPage(true)}>
          Take me to login
        </Button>
      </ThemeProvider>
    );
  }
}

export default Register;

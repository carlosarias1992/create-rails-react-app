import React from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import "./Login.css";

const INITIAL_STATE = {
  username: "",
  password: "",
  submitting: false
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
    this.setState({ submitting: true });

    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };

    this.props
      .login({ user })
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
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <FormGroup>
            <TextField
              className="Login--Input"
              label="Username"
              value={username}
              variant="outlined"
              size="small"
              onChange={this.handleInput("username")}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="Login--Input"
              label="Password"
              type="password"
              value={password}
              variant="outlined"
              size="small"
              onChange={this.handleInput("password")}
            />
          </FormGroup>
          <Button type="submit" disabled={this.state.submitting}>
            Login
          </Button>
        </form>
        <p>Want to sign up instead?</p>
        <Button onClick={() => this.props.setToLoginPage(false)}>
          Take me to sign up
        </Button>
      </ThemeProvider>
    );
  }
}

export default Login;

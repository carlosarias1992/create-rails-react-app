import React from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import "./Login.css";

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
          <Button type="submit">Login</Button>
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

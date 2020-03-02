import React from "react";
import { AxiosResponse } from "axios";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import { UserWithPassword } from "../../types";
import "./Login.css";

interface Props {
  login: (arg0: { user: UserWithPassword }) => Promise<AxiosResponse>;
  setToLoginPage: (arg0: boolean) => void;
}

class Login extends React.Component {
  readonly state = {
    username: "",
    password: "",
    submitting: false
  };

  readonly props: Props;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({ submitting: true });

    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };

    this.props
      .login({ user })
      .then(() => this.setState({ submitting: false }))
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

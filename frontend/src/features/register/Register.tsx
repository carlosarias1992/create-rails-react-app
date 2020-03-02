import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { TextField, Button, FormGroup } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { AxiosResponse } from "axios";
import { UserWithPassword } from "../../types";
import "./Register.css";

interface Props {
  signup: (arg0: { user: UserWithPassword }) => Promise<AxiosResponse>;
  setToLoginPage: (arg0: boolean) => void;
}

class Register extends React.Component {
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
      .signup({ user })
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

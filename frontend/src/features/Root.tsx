import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import { loginStatus } from "../api_requests/sessions";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    // @ts-ignore
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    // @ts-ignore
    loginStatus(this.state.user)
      .then((response: any) => {
        if (response.data.ok) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error: any) => console.log("api errors: ", error));
  }

  handleLogin = (data: any) => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                // @ts-ignore
                handleLogout={this.handleLogout}
                // @ts-ignore
                loggedInStatus={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                // @ts-ignore
                handleLogin={this.handleLogin}
                // @ts-ignore
                loggedInStatus={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <Register
                {...props}
                // @ts-ignore
                handleLogin={this.handleLogin}
                // @ts-ignore
                loggedInStatus={this.state.isLoggedIn}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

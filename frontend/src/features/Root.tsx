import React from "react";
import { AuthRoute, ProtectedRoute } from "../routing";
import Home from "./home";
import Login from "./login";
import Register from "./register";

class App extends React.Component {
  render() {
    return (
      <div>
        <ProtectedRoute path="/home" component={Home} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Register} />
      </div>
    );
  }
}

export default App;

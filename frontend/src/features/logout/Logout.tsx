import React from "react";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const Logout = props => {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <p>Welcome back, {props.currentUser?.username}!</p>
      <Button onClick={props.logout}>Logout</Button>
    </ThemeProvider>
  );
};

export default Logout;

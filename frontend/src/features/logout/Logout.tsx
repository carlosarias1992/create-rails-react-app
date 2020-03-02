import React from "react";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { User } from "../../types";

interface Props {
  currentUser?: User;
  logout: () => void;
}

const Logout = (props: Props) => {
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

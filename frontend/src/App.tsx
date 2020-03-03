import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import Root from "./features/RootContainer";
import "./App.css";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: lightBlue
    }
});

const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    </BrowserRouter>
);

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./features/Root";

import "./App.css";

// @ts-ignore
const App = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

export default App;

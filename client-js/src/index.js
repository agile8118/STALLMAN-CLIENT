import React from "react";
import ReactDOM from "react-dom";

import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";

ReactDOM.render(<SignUp />, document.querySelector("#signup-modal"));
ReactDOM.render(<SignIn />, document.querySelector("#signin-modal"));

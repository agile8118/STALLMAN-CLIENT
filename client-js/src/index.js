import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import profileReducers from "./reducers/profile";

const profileStore = createStore(profileReducers, applyMiddleware(thunk));

import SignUp from "./components/authentication/SignUp";
import SignIn from "./components/authentication/SignIn";

import Profile from "./components/profile";

// Get the sign up container, if succeeded, render the profile component there
const signupContainer = document.querySelector("#signup-modal");
if (signupContainer) ReactDOM.render(<SignUp />, signupContainer);

// Get the sign in container, if succeeded, render the profile component there
const signinContainer = document.querySelector("#signin-modal");
if (signinContainer) ReactDOM.render(<SignIn />, signinContainer);

// Get the profile container, if succeeded, render the profile component there
const profileContainer = document.querySelector("#profile");
if (profileContainer)
  ReactDOM.render(
    <Provider store={profileStore}>
      <Profile />
    </Provider>,
    profileContainer
  );

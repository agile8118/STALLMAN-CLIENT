import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import SibeBar from "./SideBar";
import Home from "./Home";

class Profile extends Component {
  render() {
    return (
      <BrowserRouter>
        <SibeBar />
        <Switch>
          <Route exact path="/profile" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Profile;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import SibeBar from "./SideBar";
import Home from "./Home";
import Transactions from "./Transactions";
import Reports from "./Reports";
import UserInformation from "./UserInformation";

class Profile extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <SibeBar />
        <div className="profile-content">
          <Switch>
            <Route exact path="/profile" component={Home} />
            <Route path="/profile/transactions" component={Transactions} />
            <Route path="/profile/reports" component={Reports} />
            <Route
              path="/profile/user-information"
              component={UserInformation}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Profile;

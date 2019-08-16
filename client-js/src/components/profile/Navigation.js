import React, { Component } from "react";
import axios from "axios";
import util from "../../util";
import { baseURL } from "../../api/config";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="navigation__left">
          <div className="navigation__brand">Welcome John Doe</div>
        </div>
        <div className="navigation__right">
          <div className="navigation__item">
            <a className="button" href="javascript:void(0)">
              Go To VIP Account
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

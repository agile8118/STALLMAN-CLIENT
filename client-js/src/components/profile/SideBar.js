import React, { Component } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../api/config";

class Navigation extends Component {
  state = { section: window.location.pathname.split("/")[2] };

  render() {
    let homeClass = `sidebar__item ${
      this.state.section === "home" ? "sidebar__item--active" : ""
    }`;
    let transactionsClass = `sidebar__item ${
      this.state.section === "transactions" ? "sidebar__item--active" : ""
    }`;
    let reportsClass = `sidebar__item ${
      this.state.section === "reports" ? "sidebar__item--active" : ""
    }`;
    let profileClass = `sidebar__item ${
      this.state.section === "user-information" ? "sidebar__item--active" : ""
    }`;

    return (
      <div className="sidebar__wrapper">
        <div className="sidebar">
          <div className={homeClass}>
            <Link
              to="/profile"
              onClick={() => {
                this.setState({ section: "home" });
              }}
            >
              <i className="fas fa-home"></i> Home
            </Link>
          </div>
          <div className={transactionsClass}>
            <Link
              to="/profile/transactions"
              onClick={() => {
                this.setState({ section: "transactions" });
              }}
            >
              <i className="fas fa-file"></i>
              Transactions
            </Link>
          </div>
          <div className={reportsClass}>
            <Link
              to="/profile/reports"
              onClick={() => {
                this.setState({ section: "reports" });
              }}
            >
              <i className="fas fa-file-alt"></i>Reports
            </Link>
          </div>
          <div className={profileClass}>
            <Link
              to="/profile/user-information"
              onClick={() => {
                this.setState({ section: "user-information" });
              }}
            >
              <i className="fas fa-user"></i>Profile
            </Link>
          </div>
          <div className="sidebar__item">
            <a
              href="javascript:void(0)"
              onClick={() => {
                localStorage.removeItem("token");
                window.location = `/`;
              }}
            >
              <i className="fas fa-sign-out-alt"></i>Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;

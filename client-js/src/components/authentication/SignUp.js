import React, { Component } from "react";
import axios from "axios";
import util from "../../util";
import { baseURL } from "../../api/config";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  };

  async onFormSubmit(event) {
    event.preventDefault();

    var bodyFormData = new FormData();
    bodyFormData.set("first_name", this.state.firstName);
    bodyFormData.set("last_name", this.state.lastName);
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("mobile_phone", this.state.mobile);
    bodyFormData.set("password_field", this.state.password);
    bodyFormData.set("username_field", this.state.username);

    try {
      const response = await axios({
        method: "post",
        url: `${config.baseURL}/account/sign-up/`,
        data: bodyFormData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      });
    } catch (error) {}
  }

  render() {
    return (
      <div className="modal u-display-none" id="modalSignUp">
        <div className="modal__content modal__content--small">
          <div className="modal__header">
            <span
              onClick={() => {
                util.toggleElement("modalSignUp");
              }}
              className="modal__close"
            >
              &times;
            </span>
            <h3 className="heading-tertiary">Create yout account</h3>
          </div>
          <form onSubmit={event => this.onFormSubmit(event)}>
            <div className="modal__body">
              <div className="form__group">
                <label className="form__label">First name</label>
                <input
                  className="form__input"
                  type="text"
                  value={this.state.firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                  maxLength="30"
                />
              </div>
              <div className="form__group">
                <label className="form__label">Last name</label>
                <input
                  className="form__input"
                  type="text"
                  value={this.state.lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                  maxLength="30"
                />
              </div>
              <div className="form__group">
                <label className="form__label">Username</label>
                <input
                  className="form__input"
                  type="text"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                  maxLength="30"
                  required
                />
              </div>
              <div className="form__group">
                <label className="form__label">Email</label>
                <input
                  className="form__input"
                  type="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form__group">
                <label className="form__label">Mobile</label>
                <input
                  className="form__input"
                  type="text"
                  value={this.state.mobile}
                  onChange={e => this.setState({ mobile: e.target.value })}
                />
              </div>
              <div className="form__group">
                <label className="form__label">Password</label>
                <input
                  className="form__input"
                  type="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  required
                />
              </div>
              <div className="form__group">
                <label className="form__label">Confirm password</label>
                <input
                  className="form__input"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={e =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="modal__footer modal__footer--one-button">
              <button className="button button--full">Sign Up</button>
              <div className="u-center-content u-margin-top-md">
                <p>
                  Already have an account?
                  <a
                    onClick={() => {
                      util.toggleElements("modalSignIn", "modalSignUp");
                    }}
                    href="javascript:void(0)"
                  >
                    &nbsp;Sign In
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

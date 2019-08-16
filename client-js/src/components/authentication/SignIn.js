import React, { Component } from "react";
import axios from "axios";
import util from "../../util";
import { baseURL } from "../../api/config";

class SignIn extends Component {
  state = {
    mobile: "",
    password: ""
  };

  async onFormSubmit(event) {
    event.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.set("mobile", this.state.mobile);
    bodyFormData.set("password", this.state.password);

    try {
      const response = await axios({
        method: "post",
        url: `${baseURL}/account/sign-in/`,
        data: bodyFormData,
        config: { headers: { "Content-Type": "multipart/form-data" } }
      });

      console.log(response);
    } catch (error) {}
  }

  render() {
    return (
      <div className="modal u-display-none" id="modalSignIn">
        <div className="modal__content modal__content--small">
          <div className="modal__header">
            <span
              onClick={() => {
                util.toggleElement("modalSignIn");
              }}
              className="modal__close"
            >
              &times;
            </span>
            <h3 className="heading-tertiary">Sign in to your account</h3>
          </div>
          <form onSubmit={event => this.onFormSubmit(event)}>
            <div className="modal__body">
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
                />
              </div>
            </div>
            <div className="modal__footer modal__footer--one-button">
              <button type="submit" className="button button--full">
                Sign In
              </button>
              <div className="u-center-content u-margin-top-md">
                <p>
                  <a href="">Reset Your Password</a>
                </p>
                <p>
                  Don't have an account?
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      util.toggleElements("modalSignIn", "modalSignUp");
                    }}
                  >
                    &nbsp;Sign Up
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

export default SignIn;

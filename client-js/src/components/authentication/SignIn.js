import React, { Component } from "react";
import axios from "axios";
import util from "../../util";
import { baseURL } from "../../api/config";

class SignIn extends Component {
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
          <div className="modal__body">
            <form action="">
              <div className="form__group">
                <label className="form__label">Mobile</label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__group">
                <label className="form__label">Password</label>
                <input className="form__input" type="password" />
              </div>
            </form>
          </div>
          <div className="modal__footer modal__footer--one-button">
            <button className="button button--full">Sign In</button>
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
        </div>
      </div>
    );
  }
}

export default SignIn;

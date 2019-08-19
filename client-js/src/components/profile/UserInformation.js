import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Loading from "../partials/Loading";
import Alert from "../partials/Alert";
import { getProfileInfo } from "../../actions/profile";

class Profile extends Component {
  state = {
    email: this.props.profile.email,
    first_name: "",
    last_name: "",
    mobile_phone: "",
    url: "",
    alertMessage: null,
    alertType: "success",
    loaded: false
  };

  componentDidMount() {
    this.props.getProfileInfo();
  }

  onFormSubmit = async event => {
    event.preventDefault();
    util.showLoading("Saving Changes...");
    let bodyFormData = new FormData();
    bodyFormData.set("first_name", this.state.first_name);
    bodyFormData.set("last_name", this.state.last_name);
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("mobile_phone", this.state.mobile_phone);

    try {
      const { data } = await axios({
        method: "PUT",
        url: this.state.url,
        data: bodyFormData,
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      });
      this.setState(
        {
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          mobile_phone: data.mobile_phone,
          url: util.convertToHttps(data.links.self),
          alertMessage: "Your profile updated successfully.",
          alertType: "success"
        },
        () => {
          util.hideLoading();
        }
      );
    } catch (error) {
      // If the error was for the mobile phone...
      if (error.response.data.mobile_phone) {
        this.setState({
          alertMessage: "This mobile phone already exists.",
          alertType: "error"
        });
      } else {
        // Otherwise return a general error
        this.setState({
          alertMessage: "Sorry, something went wrong.",
          alertType: "error"
        });
      }
      util.hideLoading();
    }
  };

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h2 className="heading-secondary">Profile</h2>
          <Alert
            message={this.state.alertMessage}
            onClose={() => {
              this.setState({ alertMessage: null });
            }}
            type={this.state.alertType}
          />
          <form className="u-margin-top-md" onSubmit={this.onFormSubmit}>
            <div className="form__group">
              <label className="form__label">First name</label>
              <input
                className="form__input"
                type="text"
                value={this.state.first_name}
                onChange={e => this.setState({ first_name: e.target.value })}
                maxLength="30"
              />
            </div>

            <div className="form__group">
              <label className="form__label">Last name</label>
              <input
                className="form__input"
                type="text"
                value={this.state.last_name}
                onChange={e => this.setState({ last_name: e.target.value })}
                maxLength="30"
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
              <label className="form__label">Mobile Phone</label>
              <input
                className="form__input"
                type="text"
                value={this.state.mobile_phone}
                onChange={e => this.setState({ mobile_phone: e.target.value })}
              />
            </div>

            <div className="u-right-content">
              <button className="button">Save</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="u-center-content">
          <Loading />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { profile: state.profile };
};

export default connect(
  mapStateToProps,
  { getProfileInfo }
)(Profile);

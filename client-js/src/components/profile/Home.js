import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="heading-secondary">Notifications</h2>

        <div className="notification">
          <div className="notification__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text. Rinting and
            typesetting industry the printing.
          </div>
          <div className="notification__actions">
            <button className="button button--full">Dismiss</button>
            <button className="button button--full">View</button>
          </div>
        </div>

        <div className="notification">
          <div className="notification__text">
            Simply duhe industry's standard dummy text. Rinting and typesetting
            industry the printing.
          </div>
          <div className="notification__actions">
            <button className="button button--full">Dismiss</button>
            <button className="button button--full">View</button>
          </div>
        </div>

        <div className="notification">
          <div className="notification__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text. Rinting and
            typesetting industry the printing. Text of the printing.
          </div>
          <div className="notification__actions">
            <button className="button button--full">Dismiss</button>
            <button className="button button--full">View</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

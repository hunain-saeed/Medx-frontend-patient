import React, { Component } from "react";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";

class Alerts extends Component {
  render() {
    return (
      this.props.alerts !== null &&
      this.props.alerts.length > 0 &&
      this.props.alerts.map((alert) => {
        return (
          <Alert key={alert.id} variant={alert.alertType}>
            {alert.msg}
          </Alert>
        );
      })
    );
  }
}

const mapStateToProps = (state) => {
  return { alerts: state.alert };
};

export default connect(mapStateToProps)(Alerts);

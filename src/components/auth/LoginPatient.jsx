import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../actions";

import Login from "./Login";

class LoginPatient extends Component {
  render() {
    if (localStorage.getItem("token") !== null) {
      this.props.signIn();
      return <Redirect to="/doctor/list" />;
    } else {
      return (
        <div>
          <Login name="Patient" change="doctor" />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn})(LoginPatient);

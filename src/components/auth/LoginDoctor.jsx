import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "./Login";

class LoginDoctor extends React.Component {
  render() {
    if (this.props.isSignedIn) {
      return <Redirect to="/profile" />;
    } else {
      return (
        <div>
          <Login name="Doctor" change="patient" />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(LoginDoctor);

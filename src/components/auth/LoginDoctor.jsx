import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../actions";

import Login from "./Login";

class LoginDoctor extends React.Component {
  render() {
    if (localStorage.getItem("token") !== null) {
      this.props.signIn();
      return <Redirect to="/" />;
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

export default connect(mapStateToProps, {signIn})(LoginDoctor);

import React, { Component } from "react";
import Login from "./Login";

class LoginPatient extends Component {
  render() {
    return (
      <div>
        <Login name="Paitent" change="doctor" />
      </div>
    );
  }
}

export default LoginPatient;

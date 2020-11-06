import React from "react";
import Login from "./Login";

class LoginDoctor extends React.Component {
  render() {
    return (
      <div>
        <Login name="Doctor" change="patient" />
      </div>
    );
  }
}

export default LoginDoctor;

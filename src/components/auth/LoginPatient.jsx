import React from "react";
import Login from "./Login";

class LoginDoctor extends React.Component {
  render() {
    return (
      <div>
        <Login name="Paitent" change="doctor" />
      </div>
    );
  }
}

export default LoginDoctor;

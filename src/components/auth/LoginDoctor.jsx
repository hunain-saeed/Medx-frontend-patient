import React from "react";
import Login from "./Login";

function LoginDoctor() {
  return (
    <div>
      <Login name="Doctor" change="patient" />
    </div>
  );
}

export default LoginDoctor;

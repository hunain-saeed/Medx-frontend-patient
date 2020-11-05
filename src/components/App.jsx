import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import LoginPatient from "./auth/LoginPatient";
import LoginDoctor from "./auth/LoginDoctor";
import Alerts from "./layout/Alerts";
import history from "../history";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <NavBar />
          <div className="container">
            <Alerts />
          </div>
          <Switch>
            <Route path="/" exact />
            <Route path="/login/patient" exact component={LoginPatient} />
            <Route path="/login/doctor" exact component={LoginDoctor} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

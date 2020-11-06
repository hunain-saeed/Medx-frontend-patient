import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import NavBar from "./NavBar";
import LoginPatient from "./auth/LoginPatient";
import LoginDoctor from "./auth/LoginDoctor";
import Alerts from "./layout/Alerts";
import history from "../history";
import myTheme from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;

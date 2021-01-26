import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import NavBar from "./NavBar/NavBar";
import HomePage from "./home/Home";
import Profile from "./profile/Profile";
import EditProfile from "./profile/profile_sub/EditProfile";
import LoginPatient from "./auth/LoginPatient";
import RegisterPatient from "./auth/RegisterPatient";
import DocList from "./doctor/DocList";
import Alerts from "./layout/Alerts";
import NotFound from "./notFound/NotFound";
import Timing from "./shedule/Timing";
import history from "../history";
import myTheme from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <Router history={history}>
          <NavBar />
          <div className="container">
            <Alerts />
          </div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login/patient" exact component={LoginPatient} />
            <Route path="/register/patient" exact component={RegisterPatient} />
            <Route path="/doctor/list" exact component={DocList} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/edit" exact component={EditProfile} />
            <Route path="/booking/:id" exact component={Timing} />            
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

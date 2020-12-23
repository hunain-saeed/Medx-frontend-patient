import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut, signIn } from "../../actions";

// Material Ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import logo from "../../logo/logo4.png";

// Custorm component import
import NavItem from "./NavItem";
import NavProfile from "./NavProfile";

class NavBar extends React.Component {
  onClickLogout = () => {
    this.props.signOut();
  };
  renderAuthButton = () => {
    if (localStorage.getItem("token") !== null) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
    if (!this.props.isSignedIn) {
      return (
        <React.Fragment>
          <NavItem name="Login" route="/login/patient" />
          <NavItem name="Register" route="/register/patient" />
        </React.Fragment>
      );
    } else if (this.props.isSignedIn) {
      return (
        <React.Fragment>
          <NavItem name="Home" route="/" />
          <NavItem name="Doctors" route="/doctor/list" />
          <NavProfile logout={this.onClickLogout} />
        </React.Fragment>
      );
    } else {
      // show loading here
      return <div></div>; 
    }
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ background: "#343a40", flexGrow: 1 }}
        >
          <Toolbar className="navc">
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                <img src={logo} alt="Logo" />
              </Link>
            </Typography>
            {this.renderAuthButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut, signIn })(NavBar);

import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions";
// Material Ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Custorm component import
import NavItem from "./NavItem";

class NavBar extends React.Component {
  onClickLogout = () => {
    this.props.signOut();
  };
  renderAuthButton = () => {
    if (!this.props.isSignedIn) {
      return (
        <React.Fragment>
          <NavItem name="Login" route="/login" />
          <NavItem name="Register" route="/register" />
        </React.Fragment>
      );
    } else if (this.props.isSignedIn) {
      return (
        <Button id="button">
          <Link onClick={this.onClickLogout} to="/" className="logoutButton">
            Logout
          </Link>
        </Button>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ background: "#343a40", flexGrow: 1 }}
        >
          <Toolbar>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Medx
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

export default connect(mapStateToProps, { signOut })(NavBar);

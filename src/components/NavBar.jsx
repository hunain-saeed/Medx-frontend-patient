import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { signIn, signOut } from "../actions";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import NavItem from "./NavItem";

class NavBar extends React.Component {
  renderAuthButton = () => {
    if (!this.props.isSignedIn) {
      return (
        <span>
          <Nav className="mr-auto">
            <NavItem name="Login" route="/login" />
            <NavItem name="Register" route="/register" />
          </Nav>
        </span>
      );
    } else if (this.props.isSignedIn) {
      return (
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Logout
          </Link>
        </Nav>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <Navbar style={{ background: "#121212" }} variant="dark">
          <Link to="/" className="navbar-brand">
            Medx
          </Link>
          {this.renderAuthButton()}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(NavBar);

import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import { signIn, signOut } from "../../actions";
// TODO remove redux hide logout login and apply correct logic
class Login extends Component {
  CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      className="ml-2"
      style={{ textDecoration: "none" }}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  onFormSubmit = (event) => {
    event.preventDefault();
    if (!this.props.isSignedIn) {
      this.props.signIn();
    } else if (this.props.isSignedIn) {
      this.props.signOut();
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="login">
        <div className="loginContainer">
          <div className="d-flex flex-column align-items-center">
            <h1>LOGIN</h1>
            <p>
              Login for{" "}
              <span className="font-weight-bold">{this.props.name}</span>
            </p>
          </div>
          {/* TODO make onSubmit function here and remove onClick <Form onSubmit={this.onFormSubmit}>*/}
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Button
              className="mt-4"
              variant="success"
              block
              type="submit"
            >
              Login
            </Button>
          </Form>

          <Dropdown className="mt-3">
            Don't have an account?
            <Dropdown.Toggle
              as={this.CustomToggle}
              id="dropdown-custom-components"
            >
              Sign Up
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/register/patient" style={{ textDecoration: "none" }}>
                  As Patient
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/register/doctor" style={{ textDecoration: "none" }}>
                  As Doctor
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Login);

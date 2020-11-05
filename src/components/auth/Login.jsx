import "./Login.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import { signIn, signOut } from "../../actions";
import { setAlert } from "../../actions/alert";
import { login } from "../../actions/auth";

// TODO remove redux hide logout login and apply correct logic
class Login extends Component {
  state = { email: "", password: "" };
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
  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);

    // if (this.state.password !== "1234") {
    //   console.log("not match");
    //   this.props.setAlert("Password do not match", "danger");
    //   this.props.signOut();
    // } else {
    //   this.props.setAlert("Password match", "success");
    //   this.props.signIn();
    // }
    // if (!this.props.isSignedIn) {
    //   this.props.signIn();
    // } else if (this.props.isSignedIn) {
    //   this.props.signOut();
    // } else {
    //   return null;
    // }
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
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => this.onChange(e)}
                value={this.state.email}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onChange={(e) => this.onChange(e)}
                value={this.state.password}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button className="mt-4" variant="success" block type="submit">
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

export default connect(mapStateToProps, { signIn, signOut, setAlert, login })(
  Login
);

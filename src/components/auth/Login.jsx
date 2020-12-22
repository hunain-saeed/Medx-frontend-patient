import "./Login.css";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { setAlert } from "../../actions/alert";
import { login } from "../../actions/auth";

// TODO when correct user login then navigate to correct router other then login
class Login extends Component {
  state = { email: "", password: "" };

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    // name determine that which database to search
    // name = doctor means he is doctor
    this.props.login(this.state, this.props.name.toLowerCase());
  };

  render() {
    if (this.props.isSignedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="loginContainer">
          <div className="d-flex flex-column align-items-center">
            <h2>{this.props.name.toUpperCase()}</h2>
            <h4 className="text-m">LOGIN</h4>
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
          <p className="mt-3 mb-0">
            Don't have an account?{" "}
            <Link
              to={"/register/" + this.props.name.toLowerCase()}
              style={{ textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { setAlert, login })(
  Login
);

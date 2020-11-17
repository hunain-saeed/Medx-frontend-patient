import "./Register.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { register } from "../../actions/auth";

// TODO after register prevent to navigate to register or login route and if type path then on regresh keep user loggedin
class RegisterPatient extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    dob: "",
    gender: "",
    password: "",
    cpassword: "",
    passmsg: "",
  };
  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  onRegister = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      this.setState({ passmsg: "Password do not match" });
    } else {
      const { name, email, address, dob, gender, password } = this.state;
      this.props.register(
        { name, email, address, dob, gender, password },
        "patient"
      );
    }
  };
  render() {
    if (this.props.isSignedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="registrer">
        <div className="registrerContainer">
          <div className="d-flex flex-column align-items-center">
            <h2>REGISTRATION</h2>
            <p>
              Register as a <span className="bold">Patient</span>
            </p>
          </div>
          <Form onSubmit={this.onRegister}>
            {/* Name and email */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  required
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  required
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Form.Group>

            {/* Address */}
            <Form.Group className="mbottom">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Address"
                type="text"
                name="address"
                value={this.state.address}
                onChange={(e) => this.onChange(e)}
              />
            </Form.Group>

            {/* Date of Birth, Gender */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  max="2013-01-01"
                  value={this.state.dob}
                  placeholder="Date of Birth"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  custom
                  onChange={(e) => this.onChange(e)}
                >
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Others</option>
                </Form.Control>
              </div>
            </Form.Group>

            {/* Password, confirm password */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  name="password"
                  minLength="6"
                  value={this.state.password}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  placeholder="Confirm Password"
                  type="password"
                  name="cpassword"
                  value={this.state.cpassword}
                  onChange={(e) => this.onChange(e)}
                  onClick={() => this.setState({ passmsg: "" })}
                />
                <Form.Text style={{ color: "red" }}>
                  {this.state.passmsg}
                </Form.Text>
              </div>
            </Form.Group>

            <Button className="mt-2" variant="success" block type="submit">
              Register
            </Button>
          </Form>

          <p className="mt-3 mb-0">
            Already have an account?{" "}
            <Link to="/login/patient" style={{ textDecoration: "none" }}>
              Login
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

export default connect(mapStateToProps, { register })(RegisterPatient);

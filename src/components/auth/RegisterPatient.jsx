import "./Register.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { register } from "../../actions/auth";

// import UI
import Button from "react-bootstrap/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

// TODO after register prevent to navigate to register or login route and if type path then on regresh keep user loggedin
class RegisterPatient extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    dob: "",
    gender: "Male",
    password: "",
    cpassword: "",
    passmsg: "",
    cpassmsg: "",
    type: "password",
  };

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onRegister = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      this.setState({ cpassmsg: "Password do not match" });
    } else {
      const { name, email, address, dob, gender, password } = this.state;

      this.props.register(
        { name, email, address, dob, gender, password },
        "patient"
      );
    }
  };

  passLen = (e) => {
    this.onChange(e);
    if (e.target.value.length === 0) {
      this.setState({ passmsg: "" });
    } else if (e.target.value.length < 6) {
      this.setState({ passmsg: "* Password must be at least 6 characters." });
    } else {
      this.setState({ passmsg: "" });
    }
  };

  comPass = (e) => {
    this.onChange(e);
    if (this.state.password !== e.target.value) {
      this.setState({ cpassmsg: "* Password do not match" });
    } else {
      this.setState({ cpassmsg: "" });
    }
  };

  showHide = () => {
    this.setState({ type: this.state.type === "text" ? "password" : "text" });
  };

  render() {
    if (this.props.isSignedIn) {
      return <Redirect to="/doctor/list" />;
    }
    return (
      <div className="registrer">
        <div className="registrerContainer">
          <div className="d-flex flex-column align-items-center">
            <h2>PATIENT</h2>
            <h4 className="text-m">REGISTRATION</h4>
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
                  id="dobinput"
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
                  value={this.state.gender}
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
                <div className="d-flex show">
                  <Form.Control
                    id="passinput"
                    placeholder="Password"
                    type={this.state.type}
                    name="password"
                    minLength="6"
                    value={this.state.password}
                    onChange={(e) => this.passLen(e)}
                  />
                  <span onClick={this.showHide}>
                    {this.state.type === "text" ? (
                      <VisibilityOffIcon className="icon" />
                    ) : (
                      <VisibilityIcon className="icon" />
                    )}
                  </span>
                </div>
                <Form.Text style={{ color: "red" }}>
                  {this.state.passmsg}
                </Form.Text>
              </div>
              <div className="col-md-6">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  placeholder="Confirm Password"
                  type="password"
                  name="cpassword"
                  value={this.state.cpassword}
                  onChange={(e) => this.comPass(e)}
                />
                <Form.Text style={{ color: "red" }}>
                  {this.state.cpassmsg}
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

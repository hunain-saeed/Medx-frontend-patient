import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loadPat, updatePat } from "../../../actions/auth";

// import UI
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

class EditProfile extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    dob: "",
    gender: "",
  };
  async componentDidMount() {
    if (this.props.isSignedIn) {
      if (localStorage.getItem("role") === "patient") {
        await this.props.loadPat();
      }
      if (this.props.user) {
        this.setState({
          name: this.props.user.name,
          email: this.props.user.email,
          address: this.props.user.address,
          dob: this.props.user.dob.split("T")[0],
          gender: this.props.user.gender,
        });
      }
    }
  }

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    const { name, address, dob, gender } = this.state;

    this.props.updatePat({ name, address, dob, gender });
  };
  render() {
    if (!this.props.isSignedIn) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="registrer">
          <div className="registrerContainer">
            <div className="d-flex flex-column align-items-center">
              <h2>EDIT PROFILE</h2>
            </div>
            <Form>
              {/* Name and email */}
              <Form.Group className="mbottom row">
                <div className="col-md-6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    type="text"
                    name="name"
                    autoComplete="off"
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
                    autoComplete="off"
                    disabled
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
                    // value = "2000-12-31"
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
                    <option>Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                  </Form.Control>
                </div>
              </Form.Group>

              <div className="row">
                <div className="col-md-6">
                  <Link
                    to={"/profile"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Button
                      className="mt-2"
                      variant="success"
                      block
                      type="submit"
                      onClick={this.onSubmit}
                    >
                      Update
                    </Button>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link
                    to={"/profile"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <Button className="mt-2" variant="danger" block>
                      Cancle
                    </Button>
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth.user, isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { loadPat, updatePat })(EditProfile);

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

// import UI
import Button from "react-bootstrap/Button";

class EditProfile extends Component {
  onRegister = (event) => {};
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
            <Form onSubmit={this.onRegister}>
              {/* Name and email */}
              <Form.Group className="mbottom row">
                <div className="col-md-6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Name"
                    type="text"
                    name="name"
                    autoComplete="off"
                    value="Change it"
                    //   value={this.state.name}
                    required
                    //   onChange={(e) => this.onChange(e)}
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
                    value="hello"
                    //   value={this.state.email}
                    required
                    //   onChange={(e) => this.onChange(e)}
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
                  // value={this.state.address}
                  // onChange={(e) => this.onChange(e)}
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
                    // value={this.state.dob}
                    placeholder="Date of Birth"
                    // onChange={(e) => this.onChange(e)}
                  />
                </div>
                <div className="col-md-6">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    custom
                    // value={this.state.gender}
                    // onChange={(e) => this.onChange(e)}
                  >
                    <option></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Others</option>
                  </Form.Control>
                </div>
              </Form.Group>

              <div className="row">
                <div className="col-md-6">
                  <Button
                    className="mt-2"
                    variant="success"
                    block
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
                <div className="col-md-6">
                  <Button
                    className="mt-2"
                    variant="danger"
                    block
                    type="submit"
                  >
                    Cancle
                  </Button>
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
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(EditProfile);

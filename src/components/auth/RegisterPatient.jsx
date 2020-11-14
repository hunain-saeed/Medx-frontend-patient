import "./Register.css";
import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import makeAnimated from "react-select/animated";

class RegisterPatient extends React.Component {
  state = {
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    charges: "",
    numpatients: "",
    Desc: "",
    spec: [],
  };
  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  onRegister = (event) => {
    event.preventDefault();
    this.props.register(
      this.state.name,
      this.state.phone,
      this.state.email,
      this.state.password,
      this.state.address,
      this.state.dob,
      this.state.gender,
      this.state.edu,
      this.state.charges,
      this.state.numpatients,
      this.state.Desc
    );
  };
  render() {
    const animatedComponents = makeAnimated();

    const spec = [
      { value: "Dermatologists", label: "Dermatologists" },
      { value: "Ophthalmologists", label: "Ophthalmologists" },
      { value: "Gynecologists", label: "Gynecologists" },
      { value: "Cardiologists", label: "Cardiologists" },
      { value: "Gastroenterologists", label: "Gastroenterologists" },
      { value: "Urologists", label: "Urologists" },
      { value: "Pulmonologists", label: "Pulmonologists" },
      { value: "Otolaryngologists", label: "Otolaryngologists" },
      { value: "Neurologists", label: "Neurologists" },
      { value: "Psychiatrists", label: "Psychiatrists" },
      { value: "Oncologists", label: "Oncologists" },
      { value: "Radiologists", label: "Radiologists" },
      { value: "Rheumatologists", label: "Rheumatologists" },
      { value: "General surgeons", label: "General surgeons" },
      { value: "Orthopedic surgeons", label: "Orthopedic surgeons" },
      { value: "Cardiac surgeons", label: "Cardiac surgeons" },
      { value: "Anesthesiologists", label: "Anesthesiologists" },
      { value: "General", label: "Physician" },
      { value: "Podiatrist", label: "Podiatrist" },
      { value: "General Practitioner", label: "General Practitioner" },
      { value: "Pediatrician", label: "Pediatrician" },
      { value: "Endocrinologist", label: "Endocrinologist" },
      { value: "Rheumatologist", label: "Rheumatologist" },
      { value: "ENT", label: "ENT" },
    ];
    return (
      <div className="registrer">
        <div className="registrerContainer">
          <div className="d-flex flex-column align-items-center">
            <h2>REGISTRATION</h2>
            <p>
              Register as a <span className="bold">Patient</span>
            </p>
          </div>
          <Form>
            {/* Name and phone */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  type="Text"
                  name="name"
                  required
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Form.Group>

            {/* Email and password */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Form.Group>

            {/* Address */}
            <Form.Group className="mbottom">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Address"
                type="Text"
                name="address"
                onChange={(e) => this.onChange(e)}
              />
            </Form.Group>

            {/* Date of Birth, Gender */}
            <Form.Group className="mb-4 row">
              <div className="col-md-6">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" custom defaultValue="Gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                  onChange={(e) => this.onChange(e)}
                  Name="gender"
                </Form.Control>
              </div>
            </Form.Group>

            <Button variant="success" block type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterPatient;

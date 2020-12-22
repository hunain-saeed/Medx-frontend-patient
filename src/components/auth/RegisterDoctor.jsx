import "./Register.css";
import React from "react";
import { Redirect } from "react-router-dom";

// Redux import
import { connect } from "react-redux";
import { getSpecList } from "../../actions/spec";
import { register } from "../../actions/auth";

// import UI
import { Form, Button } from "react-bootstrap";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class RegisterDoctor extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    phoneno: "",
    dob: "",
    gender: "Male",
    days: [],
    start_time: "",
    duration: "",
    patient_per_day: "",
    charges: "",
    education: "",
    description: "",
    specializations: [],
    password: "",
    cpassword: "",
    passmsg: "",
    descmsg: "",
    type: "password",
  };

  componentDidMount() {
    this.props.getSpecList();
  }

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onRegister = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.cpassword) {
      this.setState({ passmsg: "Password do not match" });
    } else {
      const {
        name,
        email,
        address,
        phoneno,
        dob,
        gender,
        days,
        start_time,
        duration,
        patient_per_day,
        charges,
        education,
        description,
        specializations,
        password,
      } = this.state;

      this.props.register(
        {
          name,
          email,
          address,
          phoneno,
          dob,
          gender,
          days,
          start_time,
          duration,
          patient_per_day,
          charges,
          education,
          description,
          specializations,
          password,
        },
        "doctor"
      );
    }

    console.log(this.state);
  };

  descLen = (e) => {
    if (e.target.value.length <= 101) {
      this.onChange(e);
      this.setState({
        descmsg: `Content limited to 100 charachters. Remaning: ${
          100 - e.target.value.length
        }`,
      });
    }
  };

  convertSpec = () => {
    var spec = [];

    this.props.specList.map((obj) => {
      return spec.push({ value: obj._id, label: obj.specialization });
    });
    return spec;
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
    const days = [
      { label: "Monday", value: 1 },
      { label: "Tuesday", value: 2 },
      { label: "Wednesday", value: 3 },
      { label: "Thursday", value: 4 },
      { label: "Friday", value: 5 },
      { label: "Saturday", value: 6 },
      { label: "Sunday", value: 7 },
    ];

    const animatedComponents = makeAnimated();

    // TODO nevigate to appointment route
    if (this.props.isSignedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="registrer">
        <div className="registrerContainer">
          <div className="d-flex flex-column align-items-center">
            <h2>DOCTOR</h2>
            <h4 className="text-m">REGISTRATION</h4>
          </div>
          <Form onSubmit={this.onRegister}>
            {/* Name and pno */}
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
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  placeholder="Phone"
                  type="tel"
                  name="phoneno"
                  value={this.state.phoneno}
                  required
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Form.Group>

            {/* Email Address */}
            <Form.Group className="mbottom">
              {/* <div className="col-md-6"> */}
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                required
                onChange={(e) => this.onChange(e)}
              />
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
                  max="1996-01-01"
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

            {/* Education */}
            <Form.Group className="mbottom">
              <Form.Label>Education</Form.Label>
              <Form.Control
                placeholder="Education"
                type="text"
                name="education"
                className="form-group"
                value={this.state.education}
                onChange={(e) => this.onChange(e)}
              />
            </Form.Group>

            {/* working days select */}
            <Form.Group className="mbspe">
              <Form.Label>Working Days</Form.Label>
              <Select
                name="days"
                closeMenuOnSelect={false}
                placeholder="Select Working Days"
                isMulti
                components={animatedComponents}
                options={days}
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    days:
                      e !== null
                        ? e.map((val) => {
                            return val.label;
                          })
                        : [],
                  });
                }}
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mbottom">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Discription"
                rows="4"
                minLength="100"
                type="Text"
                name="description"
                className="form-group mb-0"
                value={this.state.description}
                onChange={(e) => this.descLen(e)}
              />
              <Form.Text style={{ color: "gray" }}>
                {this.state.descmsg}
              </Form.Text>
            </Form.Group>

            {/* start time and duration */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  name="start_time"
                  value={this.state.start_time}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  placeholder="Number of hours"
                  type="number"
                  min="1"
                  name="duration"
                  value={this.state.duration}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Form.Group>

            {/* Charges, Patients */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Charges per patient</Form.Label>
                <Form.Control
                  placeholder="Charges per patient"
                  type="number"
                  min="0"
                  name="charges"
                  value={this.state.charges}
                  step="1"
                  className="form-control currency"
                  id="c2"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="col-md-6">
                <Form.Label>Patients per day</Form.Label>
                <Form.Control
                  placeholder="Patients per day"
                  type="number"
                  min="0"
                  step="1"
                  name="patient_per_day"
                  value={this.state.patient_per_day}
                  className="form-control"
                  max="30"
                  id="c1"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
            </Form.Group>

            {/* Specilization */}
            <Form.Group className="mbspe">
              <Form.Label>Specilization</Form.Label>
              <Select
                name="specializations"
                closeMenuOnSelect={false}
                placeholder={
                  this.props.loading ? "Loading..." : "Specilizations"
                }
                isMulti
                components={animatedComponents}
                options={this.convertSpec()}
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    specializations:
                      e !== null
                        ? e.map((val) => {
                            return val.value;
                          })
                        : [],
                  });
                }}
              />
            </Form.Group>

            {/* password and confirm password */}
            <Form.Group className="mbottom row">
              <div className="col-md-6">
                <Form.Label>Password</Form.Label>
                <div className="d-flex show">
                  <Form.Control
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    specList: state.spec.specList,
    loading: state.spec.loading,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getSpecList, register })(
  RegisterDoctor
);

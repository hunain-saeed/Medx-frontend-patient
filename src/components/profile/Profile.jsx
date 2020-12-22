import "./Profile.css";
import React from "react";
import { connect } from "react-redux";
import { loadPat } from "../../actions/auth";

import Button from "react-bootstrap/Button";
import Appointment from "./Appointment";

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      if (localStorage.getItem("role") === "patient") {
        this.props.loadPat();
      }
    }
  }
  render() {
    if (this.props.user) {
      return (
        <div className="row m-0 p-0">
          <div className="col-lg-3 col-12 m-0 p-0 leftPro">
            <div className="con">
              <img
                className="propic"
                src={this.props.user.avatar}
                alt="Profile"
              />
              <h2 className="mb-1">{this.props.user.name}</h2>
              <h4>{this.props.user.email}</h4>
              <Button variant="outline-primary edit-btn">Edit Profile</Button>
            </div>
          </div>
          <div className="col-lg-1 col-12 m-0 p-0"></div>
          <div className="col-lg-7 col-12">
            <div className="list">
              <h2>Appointment List</h2>
              <hr />
            </div>
            <div>
              <Appointment name="Saad Khan" img="https:t.ly/IL21" />
              <Appointment name="Bilal Ahsan" img="https:t.ly/dzY1" />
              <Appointment name="Kanwal Gul" img="https:t.ly/gbqr" />
              <Appointment name="Smith Joe" img="https:t.ly/JqFx" />
            </div>
          </div>
          <div className="col-lg-1 col-12 m-0 p-0"></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.auth.user, isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { loadPat })(Profile);

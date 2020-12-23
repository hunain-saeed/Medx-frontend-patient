import "./Profile.css";
import React from "react";
import { connect } from "react-redux";
import { loadPat } from "../../actions/auth";
import { appList } from "../../actions/profile";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import Appointment from "./Appointment";

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      if (localStorage.getItem("role") === "patient") {
        this.props.loadPat();
        this.props.appList();
      }
    }
  }

  drawAppointment = () => {
    var count = 0;
    if (this.props.applist) {
      return this.props.applist.map((app) => {
        return <Appointment key={count++} details={app} />;
      });
    } else {
      return (
        <div className="not-found text-center">
          <h1>No Appointment Found!</h1>
        </div>
      );
    }
  };

  render() {
    if (this.props.user) {
      return this.props.loading ? (
        <Backdrop className="loading" open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className="row m-0 p-0 fullhight">
          <div className="col-lg-3 col-12 m-0 p-0 leftPro">
            <div className="con">
              <img
                className="propic"
                src={this.props.user.avatar}
                alt="Profile"
              />
              <h2 className="mb-1">{this.props.user.name}</h2>
              <h4>{this.props.user.email}</h4>
              <button className="btn edit-btn home-color">Edit Profile</button>
            </div>
          </div>
          <div className="col-lg-1 col-12 m-0 p-0"></div>
          <div className="col-lg-7 col-12">
            <div className="list">
              <h2>Appointment List</h2>
              <hr />
            </div>
            {/* <div className="list"> */}
            {this.drawAppointment()}
            {/* 
              <Appointment name="Bilal Ahsan" img="https:t.ly/dzY1" />
              <Appointment name="Kanwal Gul" img="https:t.ly/gbqr" />
              <Appointment name="Smith Joe" img="https:t.ly/JqFx" /> */}
            {/* </div> */}
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
  return {
    user: state.auth.user,
    isSignedIn: state.auth.isSignedIn,
    appList: state.applist.applist,
    loading: state.applist.loading,
  };
};

export default connect(mapStateToProps, { loadPat, appList })(Profile);

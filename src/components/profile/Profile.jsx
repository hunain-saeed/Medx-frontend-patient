import "./Profile.css";
import React from "react";
import { connect } from "react-redux";
import { loadPat } from "../../actions/auth";
import { appList } from "../../actions/profile";

// import UI
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProfilePanel from "./ProfilePanel";
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
          <ProfilePanel user={this.props.user} />
          <div className="col-lg-1 col-12 m-0 p-0"></div>
          <div className="col-lg-7 col-12">
            <div className="list">
              <h2>Appointment List</h2>
              <hr />
            </div>
            {this.drawAppointment()}
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
    applist: state.applist.appList,
    loading: state.applist.loading,
  };
};

export default connect(mapStateToProps, { loadPat, appList })(Profile);

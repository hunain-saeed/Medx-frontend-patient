import React, { Component } from "react";
import { Link } from "react-router-dom";

import ViewProfile from "./profile_sub/ViewProfile";


// import UI
import Button from "react-bootstrap/Button";

class ProfilePanel extends Component {
  state = {
    open: false,
  };
  // Opens dialouge box
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  // Close dialouge box
  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    return (
      <div className="col-lg-3 col-12 m-0 p-0 leftPro">
        <div className="con">
          <img className="propic" src={this.props.user.avatar} alt="Profile" />
          <h2 className="mb-1">{this.props.user.name}</h2>
          <h4>{this.props.user.email}</h4>
          <Button
            className="edit-btn"
            variant="dark"
            onClick={this.handleClickOpen}
          >
            View Profile
          </Button>

          <Link
            to={`/profile/edit`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button className="edit-btn" variant="dark">
              Edit Profile
            </Button>
          </Link>
          <Link
            to={`/profile/edit`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button className="edit-btn" variant="dark">
              Change Password
            </Button>
          </Link>
        </div>
        <ViewProfile handleClose={this.handleClose} open={this.state.open} user={this.props.user} />
      </div>
    );
  }
}

export default ProfilePanel;

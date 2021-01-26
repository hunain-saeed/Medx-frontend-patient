import "./EditProfile.css"
import React, { Component } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";

import { Form } from "react-bootstrap";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class ViewProfile extends Component {
  userDetails = () => {
    return (
      <div className="ml-2 mr-4">
      {/* Name and email */}
      <Form.Group className="row">
          <div className="col-md-6">
            <p className=" mb-1">Name</p>
            <p className="text-muted">{this.props.user.name}</p>
          </div>
          <div className="col-md-6">
            <p className="mb-1">Email</p>
            <p className="text-muted">{this.props.user.email}</p>
          </div>
        </Form.Group>
        <Form.Group className="row">
          <div className="col">
            <p className=" mb-1">Address</p>
            <p className="text-muted">{this.props.user.address}</p>
          </div>
        </Form.Group>

        {/* Date of Birth, Gender */}
        <Form.Group className="row">
          <div className="col-md-6">
            <p className=" mb-1">Date of Birth</p>
            <p className="text-muted">{this.props.user.dob.split('T')[0]}</p>
          </div>
          <div className="col-md-6">
            <p className="mb-1">Gender</p>
            <p className="text-muted capa">{this.props.user.gender}</p>
          </div>
        </Form.Group>
      </div>
    );
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="d-flex justify-content-between">
          <DialogTitle id="form-dialog-title" className="ml-1">
            Profile
          </DialogTitle>
          <IconButton
            className="mr-2"
            edge="start"
            color="inherit"
            onClick={this.props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />

        <DialogContent>
          {/* show user details */}
          {this.userDetails()}
        </DialogContent>
      </Dialog>
    );
  }
}

export default ViewProfile;

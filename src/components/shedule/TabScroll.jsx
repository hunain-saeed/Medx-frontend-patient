import "./Timing.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getDocShedule } from "../../actions/profile";
import { bookapp } from "../../actions/book";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Form } from "react-bootstrap";

import TabPanel from "./TabPanel";

class TabScroll extends Component {
  state = {
    value: 0,
    open: false,
    patientname: "",
    age: "",
    date_time: "",
    time: "",
  };

  handleChange = (e, newValue) => {
    this.setState({ value: newValue });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      patientname: "",
      age: "",
      date_time: "",
      time: "",
    });
  };

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getDocShedule(this.props.doc_id);
  }

  takeDate = (datetime, t) => {
    this.setState({ ...this.state, date_time: datetime, time: t });
    this.handleClickOpen();
  };
  formSub = () => {
    const { patientname, age, date_time, time } = this.state;
    this.props.bookapp(
      { patientname, age, date_time, time },
      this.props.doc_id
    );
  };

  drawTabs = () => {
    var k = 0;
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var mS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (this.props.docShedule.length > 0) {
      return this.props.docShedule.map((datetime) => {
        var date = new Date(datetime.date);
        var ddm =
          weekday[date.getDay()] +
          ", " +
          mS[date.getMonth()] +
          " " +
          date.getDate();
        k = k + 1;
        return <Tab key={k} label={ddm} />;
      });
    } else {
      return <h1>No free time slots available for selected date</h1>;
    }
  };

  drawTime = () => {
    var count = 0;
    var k = 0;
    if (this.props.docShedule.length > 0) {
      return this.props.docShedule.map((datetime) => {
        return (
          <TabPanel key={count} value={this.state.value} index={count++}>
            <div className="row">
              {datetime.time.map((t) => {
                if (t) {
                  k = k + 1;
                  return (
                    <div key={k} className="col-lg-2 col-sm-4 col-6 mb-4">
                      <Button
                        variant="contained"
                        onClick={() => {
                          this.takeDate(datetime.date, t);
                        }}
                        className="btnsize"
                      >
                        {t}
                      </Button>
                    </div>
                  );
                }
              })}
            </div>
          </TabPanel>
        );
      });
    }
  };

  drawDialouge = () => {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the form to book an appointment.
          </DialogContentText>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="patientname"
              onChange={(e) => this.onChange(e)}
              value={this.state.patientname}
              placeholder="Enter Patient Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              onChange={(e) => this.onChange(e)}
              value={this.state.age}
              placeholder="Enter Patient Age"
              min="0"
              required
            />
          </Form.Group>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Button onClick={this.formSub} color="primary">
              Confirm
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    );
  };

  render() {
    return this.props.loading ? (
      <Backdrop className="loading" open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ) : (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {this.drawTabs()}
          </Tabs>
        </AppBar>
        {this.drawTime()}
        {this.drawDialouge()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    docShedule: state.shedule.docShedule,
    loading: state.shedule.loading,
  };
};

export default connect(mapStateToProps, { getDocShedule, bookapp })(TabScroll);

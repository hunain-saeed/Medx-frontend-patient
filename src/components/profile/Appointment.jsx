import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Appointment.css";

class Appointment extends Component {
  weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  mS = [
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
  render() {
    const {
      date_time,
      time,
      total_bill,
      doctorname,
      patientname,
      age,
    } = this.props.details;
    var date = new Date(date_time);
    var ddm =
      this.weekday[date.getDay()] +
      ", " +
      this.mS[date.getMonth()] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear();
    return (
      <div className="cusCard">
        <div className="cusCardContainer">
          <div className="row no-gutters">
            <div className="col-lg-6 col-12">
              <Card.Title className="mb-2">
                Date: <span className="text-m">{ddm}</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Time: <span className="text-m">{time}</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Charges: <span className="text-m">Rs. {total_bill}</span>
              </Card.Title>
            </div>
            <div className="col-lg-6 col-12">
              <Card.Title className="mb-2">
                Doctor Name: <span className="text-m">{doctorname}</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Patient Name: <span className="text-m">{patientname}</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Patient Age: <span className="text-m">{age}</span>
              </Card.Title>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;

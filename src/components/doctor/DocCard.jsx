import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class DocCard extends Component {
  render() {
    return (
      <div className="mb-4">
        <Card>
          <div className="row no-gutters">
            <div className="col-lg-2 col-12 align-self-center xsmall">
              <img
                className="img"
                src={this.props.img ? this.props.img: null}
              />
            </div>
            <div className="col-lg-7 col-12 line">
              <Card.Body>
                <Card.Title className="mb-1">Dr. {this.props.name}</Card.Title>
                <Card.Text className="my-0 text-muted">
                  Skin Specialist, Anaesthetist, Skin Specialist, Anaesthetist
                </Card.Text>
                <Card.Text className="my-0 text-muted">
                  MBBS, MCPS (Dermatology)
                </Card.Text>
                <Card.Subtitle className="my-2">
                  Charges: Rs. 2000
                </Card.Subtitle>
              </Card.Body>
            </div>
            <div className="col-lg-3 col-12 footer px-3 align-self-center">
              <Button variant="outline-primary" className="margin" block>
                View Doctor Profile
              </Button>
              <Button variant="outline-info" block>
                Book Appointment
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default DocCard;

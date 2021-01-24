import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Meettheteam.css";
import saad from "../../../images/saad.jpeg";
import hunain from "../../../images/hunain.jpeg";
import kanwal from "../../../images/kanwal.jpeg";

class Meettheteam extends Component {
  render() {
    return (
      <div className="mb-5 pb-5">
        <h3 className="meet">MEET THE TEAM</h3>
        <div className="revheadborder"></div>
        <div className="row m-0">
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Card className="card-size">
              <Card.Img variant="top" className="card-img" src={saad} />
              <Card.Body>
                <Card.Title>Saad Mohammed Khan</Card.Title>
                <Card.Subtitle>Frontend developer</Card.Subtitle>
                <Card.Text className="mt-1 text-muted">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Card className="card-size">
              <Card.Img variant="top" className="card-img" src={hunain} />
              <Card.Body>
                <Card.Title>Huanin Saeed</Card.Title>
                <Card.Subtitle>MERN Stack developer</Card.Subtitle>
                <Card.Text className="mt-1 text-muted">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-4 d-flex justify-content-center">
            <Card className="card-size">
              <Card.Img variant="top" className="card-img" src={kanwal} />
              <Card.Body>
                <Card.Title>Kanwal Gul</Card.Title>
                <Card.Subtitle>Backend developer</Card.Subtitle>
                <Card.Text className="mt-1 text-muted">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam sedasd commodo nibh ante
                  facilisis bibendum dolor feugiat at."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Meettheteam;

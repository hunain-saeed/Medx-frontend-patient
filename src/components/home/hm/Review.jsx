import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Review.css";

class Review extends Component {
  render() {
    return (
      <Card className="mb-3" style={{ width: '24rem' }}>
        <Card.Header className="py-0">
          <div className="row">
            <div className="imgicon">
              <h1 className="mt-1">{this.props.icon}</h1>
            </div>
            <div>
              <h5 className="m-0 mt-2">{this.props.name}</h5>
              <p>{this.props.sub}</p>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>{this.props.review}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Review;

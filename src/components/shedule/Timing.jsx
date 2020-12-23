import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurDoc } from "../../actions/profile";

import { Card } from "react-bootstrap";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import TabScroll from "./TabScroll";
// import SliderCard from "./SliderCard";

class Timing extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getCurDoc(id);
  }

  getSpec = () => {
    if (this.props.curDoc) {
      if (this.props.curDoc.specializations) {
        return this.props.curDoc.specializations.map((spec) => {
          return spec.specialization + ", ";
        });
      }
    }
  };

  render() {
    return this.props.loading ? (
      <Backdrop className="loading" open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ) : (
      <div className="container my-4">
        <Card>
          <div className="row no-gutters">
            <div className="col-3 align-self-center text-center">
              <img
                className="img"
                src={this.props.curDoc.avatar}
                alt="avatar"
              />
            </div>
            <div className="col-9 line">
              <Card.Body>
                <Card.Title className="mb-1">
                  Dr. {this.props.curDoc.name}
                </Card.Title>
                <p className="mb-1">{this.getSpec()}</p>
                <p>
                  Fee:{" "}
                  <span className="bold">Rs {this.props.curDoc.charges}</span>
                </p>
              </Card.Body>
            </div>
          </div>
        </Card>
        <div className="mt-3">
          <TabScroll doc_id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curDoc: state.curDoc.curDoc,
    loading: state.curDoc.loading,
  };
};

export default connect(mapStateToProps, { getCurDoc })(Timing);

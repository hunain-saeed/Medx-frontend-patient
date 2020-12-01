import "./Doctor.css";
import React, { Component } from "react";
// Redux import
import { connect } from "react-redux";
import { getDoctors } from "../../actions/profile";

// UI import
import SearchBar from "material-ui-search-bar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import DocCard from "./DocCard";

class DocList extends Component {
  componentDidMount() {
    this.props.getDoctors();
  }
  showAllDoc = () => {
    return (
      <React.Fragment>
        {this.props.docList.length > 0 ? (
          this.props.docList.map((doc) => {
            return <DocCard key={doc._id} doc={doc} />;
          })
        ) : (
          <h4>No profiles found...</h4>
        )}
      </React.Fragment>
    );
  };
  render() {
    return this.props.loading ? (
      <Backdrop className="loading" open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ) : (
      <div className="container">
        <div className="my-4">
          <SearchBar />
        </div>
        {this.showAllDoc()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { docList: state.profile.docList, loading: state.profile.loading };
};

export default connect(mapStateToProps, { getDoctors })(DocList);

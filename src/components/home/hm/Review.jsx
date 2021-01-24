import React, { Component } from "react";
import "./Review.css";

class Review extends Component {
  render() {
    return (
      <div className="d-flex flex-row py-2 review-hover mb-3">
        <div className="px-2">
          <img className="review-img" src="https://pbs.twimg.com/profile_images/691698217642229760/zzlCj9bz.jpg" alt="pictures"/>
        </div>
        <div className="px-3">
          <div><i>
            "{this.props.review}"
            </i>
          </div>
          <div className="name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default Review;

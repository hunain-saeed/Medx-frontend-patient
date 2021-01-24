import React, { Component } from "react";
import Review from "./Review";
import "./Reviewsection.css";

class Reviewsection extends Component {
  render() {
    return (
      <div className="pt-4 pb-5 wall">
      {/* <div className="line-heading"></div> */}
        <h3 className="texting">EXPERTS REVIEW</h3>
        <div className="revheadborder"></div>
        <div className="row py-1 m-0 px-5">
          <div className="col-lg-6 col-xl-4 px-1 py-2">
            <Review
              name="Rabia Gulzar"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="col-lg-6 col-xl-4 px-1 py-2">
            <Review
              name="Arham Javaid"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="col-xl-4 col-lg-6 px-1 py-2">
            <Review
              name="Rabia Gulzar"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="col-xl-4 col-lg-6 px-1 py-2">
            <Review
              name="Rabia Gulzar"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="col-xl-4 col-lg-6 px-1 py-2">
            <Review
              name="Rabia Gulzar"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="col-xl-4 col-lg-6 px-1 py-2">
            <Review
              name="Rabia Gulzar"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviewsection;

import React, { Component } from "react";
import Review from "./Review";
import "./Reviewsection.css";

class Reviewsection extends Component {
  render() {
    return (
      <div className="mt-5">
        <h1 className="texting">Experts Review</h1>
        <div className="line-heading"></div>
        <div className="row pt-3 m-0 wall">
          <div className="d-flex col-lg-4 justify-content-center">
            <Review
              icon="R"
              name="Rabia_Gulzar"
              sub="Assistant Prof. FAST-NUCES "
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center">
            <Review
              icon="A"
              name="Arham_Javaid"
              sub="Assistant Prof. FAST-NUCES "
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center">
            <Review
              icon="R"
              name="Rabia_Gulzar"
              sub="Assistant Prof. FAST-NUCES "
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center">
            <Review
              icon="R"
              name="Rabia_Gulzar"
              sub="Assistant Prof. FAST-NUCES "
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center">
            <Review
              icon="R"
              name="Rabia_Gulzar"
              sub="Assistant Prof. FAST-NUCES "
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center">
            <Review
              icon="R"
              name="Rabia_Gulzar"
              sub="Assistant Prof. FAST-NUCES "
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Reviewsection;

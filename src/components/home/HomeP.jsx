import "./Timing.css";
import React from "react";

import { Card } from "react-bootstrap";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

class Timing extends React.Component {
  render() {
    var settings = {
      dots: false,
    };
    return (
      <div>
        <div className="container ">
          <div className="d-flex justify-content-center ">
            <div className="image"></div>
            <div className="flex-column">
              <div>
                <h5>Ronald McDonald</h5>
              </div>
              <div>
                <h5 className="specc">Dentist</h5>
              </div>
              <div>
                <p>Fee: Rs 2000</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="tab">
          <div className="containerw">
            <Slider {...settings}>
              <SliderCard day="Monday" />
              <SliderCard day="Tuesday" />
              <SliderCard day="Wednesday" />
              <SliderCard day="Thursday" />
              <SliderCard day="Friday" />
              <SliderCard day="Saturday" />
              <SliderCard day="Sunday" />
              <SliderCard day="Monday" />
              <SliderCard day="Tuesday" />
              <SliderCard day="Wednesday" />
              <SliderCard day="Thursday" />
              <SliderCard day="Friday" />
              <SliderCard day="Saturday" />
              <SliderCard day="Sunday" />
              <SliderCard day="Monday" />
              <SliderCard day="Tuesday" />
              <SliderCard day="Wednesday" />
              <SliderCard day="Thursday" />
              <SliderCard day="Friday" />
              <SliderCard day="Saturday" />
              <SliderCard day="Sunday" />
            </Slider>
          </div>
        </Card>
      </div>
    );
  }
}
export default Timing;

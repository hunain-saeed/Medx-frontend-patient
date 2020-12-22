import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Appointment.css";

class Appointment extends Component {
  render() {
    return (
      <div className="cusCard">
        <div className="cusCardContainer">
          <div className="row no-gutters">
            <div className="col-lg-6 col-12">
              <Card.Title className="mb-2">
                Date: <span className="text-m">Tues 12-12-2020</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Time: <span className="text-m">9:30 PM</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Charges: <span className="text-m">Rs. 2000</span>
              </Card.Title>
            </div>
            <div className="col-lg-6 col-12">
              <Card.Title className="mb-2">
                Doctor Name: <span className="text-m">{this.props.name}</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Patient Name: <span className="text-m">{this.props.name}</span>
              </Card.Title>
              <Card.Title className="mb-2">
                Patient Age: <span className="text-m">53</span>
              </Card.Title>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;

//             <div className="col-lg-6 col-12 footer px-3 align-self-center">
//             <Card.Subtitle className="my-2">
//                   Charges: Rs. 2000
//                 </Card.Subtitle>
//               <Card.Subtitle className="my-2">
//                   Tuesday
//                 </Card.Subtitle>
//                 <Card.Subtitle className="my-2">
//                   9:30 PM
//                 </Card.Subtitle>
//             </div>
//           </div>
//         </Card>
//       </div>
//     );

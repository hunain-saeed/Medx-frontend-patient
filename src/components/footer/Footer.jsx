import "./Footer.css";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

class Footer extends React.Component {
  render() {
    return (
      <div className="about mt-4">
        <h2 className="heading">About Us</h2>
        <div className="row m-0">
          <div className="col-md-1" />
          <div className="col-md-5">
            <h3>Motivation</h3>
            <p>
              Book appointments with the best Doctors and Specialists such as
              Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc.
              Avail test services such as MRI, CT scan, Ultrasound, X-Ray, etc.
              and Online Doctor Video Consultations all across Pakistan
              conveniently.
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <div className="mb-3">
              <FacebookIcon style={{ fontSize: 50 }} className="mr-3" />
              www.Facebook.com/MedX Healthcare
            </div>
            <div className="mb-3">
              <InstagramIcon style={{ fontSize: 50 }} className="mr-3" />
              www.Instagram.com/MedX_Healthcare
            </div>
            <div className="mb-3">
              <TwitterIcon style={{ fontSize: 50 }} className="mr-3" />
              www.Twitter.com/Medx_Healthcare
            </div>
          </div>
        </div>
        <div className="divider">
          <h2>Contact Us @</h2>
          <div className="row m-0">
            <div className="col-md-6">
              <div>
                <PhoneIcon style={{ fontSize: 50 }} className="mr-3" />
                0092-335-314-9032
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <MailIcon style={{ fontSize: 50 }} className="mr-3" />
                MedXOfficial@gmail.com
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;

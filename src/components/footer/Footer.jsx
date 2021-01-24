import "./Footer.css";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

class Footer extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="row m-0">
          <div className="col-md-1" />
          <div className="col-md-6">
            <h1 className="font-weight-bold">Medx</h1>
            <div className="footerheadborder"></div>
            <p className="text-gray">
              Book appointments with the best Doctors and Specialists such as
              Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc.
              Avail test services such as MRI, CT scan, Ultrasound, X-Ray, etc.
              and Online Doctor Video Consultations all across Pakistan
              conveniently.
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-4">
            <h4 className="contact">Contact Info</h4>
            <p className="mb-1">
              <LocationOnIcon style={{ fontSize: 20 }} className="mr-2 mb-1" />
              Address
            </p>
            <div className="mt-0 mb-3 text-gray">Bulding# 3 A Street Karachi</div>
            <p className="mb-1">
              <PhoneIcon style={{ fontSize: 20 }} className="mr-2 mb-1" />
              Phone
            </p>
            <div className="mt-0 mb-3 text-gray">+92 111 2233112</div>
            <p className="mb-1">
              <EmailOutlinedIcon
                style={{ fontSize: 20 }}
                className="mr-2 mb-1"
              />
              Email
            </p>
            <div className="mt-0 mb-3 text-gray">info@medx.com</div>
          </div>
        </div>
      
        <div className="socialmedia">
          <FacebookIcon className="mx-4 facebook" style={{ fontSize: 50 }} />
          <InstagramIcon className="mx-4 instagram" style={{ fontSize: 50 }} />
          <TwitterIcon className="mx-4 twitter" style={{ fontSize: 50 }} />
        </div>

        <div className="copywrite">© Copy write 2021 Medx</div>
      </div>
    );
  }
}

export default Footer;

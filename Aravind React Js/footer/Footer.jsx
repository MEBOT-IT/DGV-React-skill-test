import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p className="pp">"Your Trusted Source for Quality Healthcare Products."    </p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p className="pp">
              Email: medijyo@gmail.com
              <br />
              Phone: 9597158124
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="social-media-links">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

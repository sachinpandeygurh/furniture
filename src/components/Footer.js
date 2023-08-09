import React from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'; // Import Bootstrap icons

const Footer = () => {
  return (
    <div className="position-relative">
    <div className="empty"/>
    <div className="bg-dark footer w-100 text-white pt-4">
      <div className="container px-3"> 
        <div className="row">
          <div className="col-md-3 d-grid">
            <h5 className="text-uppercase">CUSTOMER SERVICE</h5>
            <p>Contact Us</p>
            <p>Shipping Information</p>
            <p>Return Policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-3 d-grid">
            <h5 className="text-uppercase">About Us</h5>
            <p>Meet Marc</p>
            <p>Showroom</p>
            <p>Design Services</p>
          </div>
          <div className="col-md-3 d-grid">
            <h5 className="text-uppercase">VISIT OUR SHOWROOM</h5>
            <p>Marc Pridmore Designs 3089 Bristol St. Costa Mesa, CA 92626</p>
            <p>Mon-Sat: 10am-6pm Sun: 12pm-5pm</p>
            <p>CALL US: (888) 427-0851</p>
          </div>
          <div className="col-md-3">
            <p>Don't miss out on sales, new arrivals and more</p>
            <div className="d-flex"> 
              <input type="text" className="outline-none bg-transparent rounded" placeholder="Enter Your Email" /> 
              <button className="btn btn-light ms-2">SIGN-UP</button> 
            </div>
            <hr className="bg-white text-white " />
            <div className="d-flex"> 
              <FaFacebook className="text-white me-2 mx-3 fs-4" />
              <FaYoutube className="text-white me-2 mx-3 fs-4" />
              <FaTwitter className="text-white me-2 mx-3 fs-4" />
              <FaInstagram className="text-white me-2 mx-3 fs-4" />
              <FaPinterest className="text-white me-2 mx-3 fs-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;

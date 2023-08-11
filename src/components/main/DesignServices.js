import React from "react";
import { Link } from "react-router-dom";

const DesignServices = () => {
  return (
    <div className="video-wrapper full position-relative">
      
      <div className="design">
        <h1
          className="text-dark text-center text-uppercase py-1"
          style={{ fontFamily: "Cinzel, SansSerif" }}
        >
          {" "}
          DESIGN SERVICES
        </h1>
        <Link className="d-flex text-decoration-none text-dark text-center text-uppercase py-1">
          <h3
            className="text-dark text-center text-uppercase p-0 m-0 d-flex align-items-center"
            style={{ fontFamily: "Playfair Display, Sans-serif"}}
          >Open New Horizons of Creativity & Expression </h3>
        </Link>
        <p className=" text-dark text-center my-5 px-3 py-1 rounded text-uppercase">
        LEARN HOW
        </p>
      </div>
    </div>
  );
};

export default DesignServices;

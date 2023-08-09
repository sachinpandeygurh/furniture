import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="d-flex py-2 topnav row">
        <div className="col-md-4" />
        <div className="d-grid justify-items-center col-md-4">
          <p className="text-uppercase m-0 p-0 ">visit our showroom </p>
          <p className="m-0 p-0 ">mon - sat:10am - 6pm & sun:12pm - 5pm </p>
        </div>
        <div className="d-flex col-md-4 align-items-end py-2 justify-content-center">
          <p className="text-uppercase">call us |</p>
          <p className="text-dark"> &nbsp;(888) 427-0851 </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

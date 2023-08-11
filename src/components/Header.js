import {
  faCartFlatbed,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
  faMapMarkerAlt,
  faSearchPlus,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

function Header() {
  const [isNavbarFixed, setisNavbarFixed] = useState(false);
  const [isHovered , setIsHovered] =useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisNavbarFixed(true);
      } else {
        setisNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlemouseEnter = ()=>{
    setIsHovered(true)
  }
const handlemouseLeave = ()=>{
  setIsHovered(false)
}
  const navStyle = {
    position: "fixed",
    width: "100%",
    zIndex: 9999,
    top: 0,
  };
  const toggler = {
    onMouseEnter: handlemouseEnter,
    onMouseLeave: handlemouseLeave,
  };
  return (
    <>
      <Navbar
        style={isNavbarFixed ? navStyle : {}}
        bg="light"
        data-bs-theme="light"
        className={`w-100`}
      >
        <Container className="d-grid">
          <Navbar.Brand
            className="d-flex row justify-content-evenly"
            as={Link}
            to="/"
          >
            <div className="col-md-3"/>
            <img className="col-md-4"
              src="https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/mpLogo.png"
              alt="marcpridmore logo"
            />
            <div className="d-flex ms-md-5 position-relative left-0 justify-content-end align-items-center col-md-4">
              <p className="px-4"> <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: "lightblack", fontSize: "24px" }}
              /> </p>
              <p className="px-4"> <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "lightblack", fontSize: "24px" }}
              /> </p>
              <p className="px-4"> <FontAwesomeIcon
                icon={faUserAlt}
                style={{ color: "lightblack", fontSize: "24px" }}
              /> </p>
              <p className="px-4"> <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "lightblack", fontSize: "24px" }}
              /> </p>
            </div>
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              living room
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Bedroom
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Occasional
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              leather
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Lighting
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Home office
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Dining room
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Accessories
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              outdoor
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              Meet Marc
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              showroom
            </Nav.Link>
            <Nav.Link className="px-2 text-uppercase" to="/" {...toggler}>
              design services
            </Nav.Link>
          </Nav>
          <div className={`nav-component p-3 bg-white container ${isHovered? "d-block": "d-none"}`} {...toggler}>
          <HeaderComponent />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

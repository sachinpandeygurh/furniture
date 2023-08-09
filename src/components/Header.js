import React from 'react'
import { Container , Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container className='d-grid'>
          <Navbar.Brand className='d-flex justify-content-center' to="/">
            <img src="https://www.marcpridmore.com/wp-content/themes/marc-pridmore/img/mpLogo.png" alt="marcpridmore logo" />
          </Navbar.Brand>

          <Nav className="me-auto ">
            <Nav.Link className='px-2 text-uppercase' to="/">living room </Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Bedroom</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Occasional</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">leather</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Lighting</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Home office</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Dining room</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Accessories</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">outdoor</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">Meet Marc</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">showroom</Nav.Link>
            <Nav.Link className='px-2 text-uppercase' to="/">design services</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
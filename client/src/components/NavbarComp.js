import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {
  Link
} from "react-router-dom";


function NavbarComp() {
  return (


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img  width={60} src="https://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Trefoil-Black-T-Shirt-_289235-back-US.jpg" alt="photo adidas logo clipart @transparentpng.com"   />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link as={Link} to="/adminpanel">Ad</Nav.Link>


          
          </Nav>
          <Nav.Link as={Link} to="/signup">
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Button variant="light" className='m-2'>Sign Up</Button>{' '}
            
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
          <Button variant="light">Log In</Button>{' '}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  );
}

export default NavbarComp;

import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Navbar 
            className="navbar navbar-dark bg-primary" 
            color="dark" 
            light expand="md">
          <NavbarBrand tag={Link} to="/">Bneural</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
              <NavLink tag={Link} to="/Login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signup">Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
  
  export default Navigation;
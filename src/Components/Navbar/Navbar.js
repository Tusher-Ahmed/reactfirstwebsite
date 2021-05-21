import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const NavbarItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container p-0 m-0 ">
      <Navbar color="light" light expand="md" className="bg-transparent">
        <NavbarBrand href="/" className="p-0">
          Rainbow IT
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" exact>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/service" exact>
                Service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" exact>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarItem;

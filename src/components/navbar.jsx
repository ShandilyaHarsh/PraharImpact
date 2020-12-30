import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="navbars">
      <Navbar className="Navbar" light expand="md">
        <NavbarBrand href="/">प्रहार : The Impact</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Student/">Student</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Social/">Social Corner</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Guest/">Guest Corner</NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MyNavComponent = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' light expand='md'>
        <NavbarBrand href='#'>NETFLIX</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='#'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Browse</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavComponent;

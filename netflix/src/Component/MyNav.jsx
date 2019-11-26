import React, { useState } from 'react';
import '../img/netflix-logo.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';

const MyNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' light expand='lg'>
        <NavbarBrand href='/'>
          <img src='https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg' alt='Logo of Netflix' />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='#'>Homes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>Movie</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profil
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Username</DropdownItem>
                <DropdownItem>Logout</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Input type='text' onChange={input => props.changeSearch(input.target.value)} placeholder='Search here!'></Input>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;

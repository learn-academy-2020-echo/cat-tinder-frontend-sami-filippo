
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import '../App.css'




const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='header' > 
    
      <Navbar color="faded" light>
        <NavbarBrand id="navbarid" href="/" >TinderCat</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>

            <NavItem>
              <NavLink href="./CatNew">Create a Cat</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="./CatIndex">All Cats</NavLink>
            </NavItem>


            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"> Ext</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default Header

// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import notfoundcat from '../assets/notfoundcat.jpg'
import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

import '../App.css'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className = "header">
      <Navbar color="light" light expand="md">
        <NavbarBrand className= "navLink" href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className= "navLink" href="/CatIndex">All Cats</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className= "navLink" href="/CatNew">Create a Cat</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className= "navLink" href="https://github.com/learn-academy-2020-echo/cat-tinder-frontend-sami-filippo">Gihub Repo</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


// const Header = props => {


// const Header = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (


//     // <div className='header' > 
    
//     //   <Navbar color="faded" light>
//     //     <NavbarBrand id="navbarid" href="/" >TinderCat</NavbarBrand>
//     //     <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//     //     <Collapse isOpen={!collapsed} navbar>
//     //       <Nav navbar>

//     //         <NavItem>
//     //           <NavLink href="/CatNew">Create a Cat</NavLink>
//     //         </NavItem>

//     //         <NavItem>
//     //           <NavLink href="/CatIndex">All Cats</NavLink>
//     //         </NavItem>

//     //       </Nav>
//     //     </Collapse>
//     //   </Navbar>


//     // </div>
//   //   <>
//   //   <div>
//   //     <header>
//   //       <div className="header-container">
//   //         <a style={{textDecoration: "none"}} href="/"><div className="title-wrapper"><img className="title-logo" src={notfoundcat} /><h1
//   //         style={{fontSize:"80px",letterSpacing:"-1px", color:"black"}} className="app-title">Meowtch Maker</h1></div></a>
//   //         <p className="header-subtitle">Meowtch up with your <span style={{fontStyle:"italic"}}>purr</span>fect flame.</p>
//   //       </div>
//   //     </header>
//   //   </div>
//   // </>
//   );
// }

// export default Header
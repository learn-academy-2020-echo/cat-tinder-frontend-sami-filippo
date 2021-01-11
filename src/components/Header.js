
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
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';


import '../App.css'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // <div className = "header">
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand className= "navLink" href="/">Home</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <NavLink className= "navLink" href="/CatIndex">All Cats</NavLink>
    //         </NavItem>
    //         <NavItem>
    //         <NavLink className= "navLink" href="/CatNew">Create a Cat</NavLink>
    //         </NavItem>
    //         <NavItem>
    //         <NavLink className= "navLink" href="https://github.com/learn-academy-2020-echo/cat-tinder-frontend-sami-filippo">Gihub Repo</NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>

<div>

{/* <h1 className='homeh1'>This is home</h1> */}
{/* <img className="" src ={ cathome } /> */}

{/* <h1 className="header-h1">Cat Tinder MEOW!</h1> */}
<div class="header-h1">
  <img src="https://www.flaticon.com/svg/static/icons/svg/763/763699.svg" alt="logo" />
  <h1>Cat Tinder MEOW!</h1>
</div>


<div className="header-buttons">
  
  <a className="link" href="/"><Button style={{background: "lightcoral", border:"0px", fontWeight: "500"}}>Home</Button></a>
  <a className="link" href="/catindex"><Button style={{background: "lightcoral", border:"0px", fontWeight: "500"}}>All Cats</Button></a>
  <a className="link" href="/catnew"><Button style={{background: "lightcoral", border:"0px", fontWeight: "500"}}>Create Cat</Button></a>
  <a className="link" href="https://github.com/learn-academy-2020-echo/cat-tinder-frontend-sami-filippo"><Button style={{background: "lightcoral", border:"0px", fontWeight: "500"}}>Github</Button></a>
</div>
  <div className="cat-index-wrapper">
  {/* <h3 className="cat-index-title">All the single cats in your area</h3><br/> */}
  </div>


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
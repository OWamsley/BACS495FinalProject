import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
  return (<>
      <Nav>
          <NavLink to="/">
            <h1>Logo</h1>
          </NavLink>
          <Bars/>
          <NavMenu>
              <NavLink to="/about" >
                  About
              </NavLink>
              <NavLink to="/about" >
                  About
              </NavLink>
              <NavLink to="/signup" >
                  Sign Up
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
      </Nav>
  </>);
};

export default Navbar;

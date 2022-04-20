import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
  return (<>
      <Nav>
          <NavLink to="/">
            <h1>Logo</h1>
          </NavLink>
          <Bars/>
          <NavBtn>
              <NavBtnLink to="/">Home</NavBtnLink>
          </NavBtn>
          <NavMenu>
              
              
              <NavLink to="/createpost">
                  Create a Post
              </NavLink>
              
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
              <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
      </Nav>
  </>);
};

export default Navbar;

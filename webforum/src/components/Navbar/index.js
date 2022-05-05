import React, { Component } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


class Navbar extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        var content;

        if(this.props.loggedin){
            content = <>
                Welcome {this.props.logInUser}
            </>
        }
        else{
            content = <>
            <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
            </>
        }

        return (<>
            <Nav>
                <NavLink to="/">
                    <h1>College Questions</h1>
                </NavLink>
                <Bars />
                <NavBtn>
                    <NavBtnLink to="/">Home</NavBtnLink>
                </NavBtn>

              
                


                    <NavLink to="/createpost">
                        Create a Post
                    </NavLink>

                    {content}
                
                
                
            </Nav>
        </>);
    }
};


export default Navbar;

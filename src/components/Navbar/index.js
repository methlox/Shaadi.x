import React from 'react'
import { Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'


const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <Navlogo to='/'>shaadi.x</Navlogo>
                <MobileIcon onClick={toggle} >
                    <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="matches">Matches</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contribute">Contribute</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sign-up">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    
    
    </>
  )
}

export default Navbar;

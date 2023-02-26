import React from 'react'
import { Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <Navlogo to='/'>shaadi.x</Navlogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="matches">Matches</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    
    
    </>
  )
}

export default Navbar;

import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="matches" onClick={toggle}>Matches</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="contribute" onClick={toggle}>Contribute</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="sign-up" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;

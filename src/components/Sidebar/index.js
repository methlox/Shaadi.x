import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkS } from './SidebarElements';

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
                <SidebarLinkS to="login" onClick={toggle}>Sign Up</SidebarLinkS>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='login'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;

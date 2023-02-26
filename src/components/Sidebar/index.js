import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="matches">Matches</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="discover">Discover</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="contribute">Contribute</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="sign-up">Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;

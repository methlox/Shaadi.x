import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  Wrapper,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SMwrap,
  Logo,
  Copy,
  SocialIcons,
  IconLink
} from "./FooterElements";

const Footer = () => {

  const toggleName = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <Wrapper>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">How it works</FooterLink>
              <FooterLink to="">Terms of Services</FooterLink>
            </LinkItems>

            <LinkItems>
              <LinkTitle>Videos</LinkTitle>
              <FooterLink to="">Agency</FooterLink>
              <FooterLink to="">Ambassadors</FooterLink>
              <FooterLink to="">Investors</FooterLink>
              <FooterLink to="">Demo</FooterLink>
            </LinkItems>
          </LinksWrapper>

          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to="">Contact</FooterLink>
              <FooterLink to="">Support</FooterLink>
              <FooterLink to="">Destinations</FooterLink>
              <FooterLink to="">Sponsors</FooterLink>
            </LinkItems>

            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to="" href="https://www.linkedin.com/in/methlox/">LinkedIn</FooterLink>
              <FooterLink to="" href="https://instagram.com/methlox" >Instagram</FooterLink>
              <FooterLink to="" href="https://twitter.com/vooloodoo">Twitter</FooterLink>
              <FooterLink to="" href="https://linktr.ee/methlox">Linktree</FooterLink>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>

        <SocialMedia>
          <SMwrap>
            <Logo to="home" onClick={toggleName}>shaadi.x</Logo>
            <Copy>
              ©️ Siddhant Sharma - {new Date().getFullYear} All rights
              reserved.
            </Copy>

            <SocialIcons>
              <IconLink href="https://github.com/methlox" target="_blank">
                <FaGithub />
              </IconLink>

              <IconLink
                href="https://twitter.com/vooloodoo"
                target="_blank"
              >
                <FaTwitter />
              </IconLink>

              <IconLink
                href="https://www.linkedin.com/in/methlox/"
                target="_blank"
              >
                <FaLinkedin />
              </IconLink>

              <IconLink href="https://linktr.ee/methlox" target="_blank">
                <SiLinktree />
              </IconLink>
            </SocialIcons>
          </SMwrap>
        </SocialMedia>
      </Wrapper>
    </FooterContainer>
  );
};
export default Footer;
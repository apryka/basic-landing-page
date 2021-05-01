import React from "react";
import styled from "styled-components";

import { Container } from "../container";

import Facebook from "../../images/svg/facebook-icon.svg";
import Instagram from "../../images/svg/instagram-icon.svg";
import Stamper from "../../images/svg/stamper-icon.svg";

const StyledFooter = styled.footer`
  padding: ${(props) =>
    props.theme.screens.lg ? "36px 30px 64px 30px" : "60px 0 60px 0"};
  background: #532800;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.theme.screens.lg ? "column" : "row")};
  align-items: center;
`;

const SocialMedia = styled.div`
  margin-top: 40px;
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: ${(props) => (props.theme.screens.lg ? "30px" : "17px")};
`;

const SocialMediaLink = styled.a`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  svg {
    width: ${(props) => (props.theme.screens.lg ? "54px" : "31px")};
    height: ${(props) => (props.theme.screens.lg ? "54px" : "31px")};
    transform: scale(1);
    transition: transform 150ms ease-out;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

const MainLink = styled.a`
  color: #fece51;
  font-family: Nunito, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ContactListItem = styled.li`
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const Marker = styled.span`
  color: #fece51;
  margin-right: 1ch;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StamperContainer = styled.div`
  order: ${(props) => (props.theme.screens.lg ? "" : "-1")};
`;

const TextContainer = styled.div`
  margin: ${(props) => (props.theme.screens.lg ? "0" : "0 112px 0 auto")};
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Content>
          <TextContainer>
            <ContactList>
              <ContactListItem>
                <Marker>T:</Marker>
                <ContactLink href="tel: +48 500 477 99">
                  500 477 995
                </ContactLink>
              </ContactListItem>
              <ContactListItem>
                <Marker>M:</Marker>
                <ContactLink href="mailto: kebabuszwagra@interia.pl">
                  kebabuszwagra@interia.pl
                </ContactLink>
              </ContactListItem>
            </ContactList>
            <MainLink
              href="http://www.uszwagra24.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.uszwagra24.pl
            </MainLink>
          </TextContainer>
          <SocialMedia>
            <SocialMediaLink
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </SocialMediaLink>
            <SocialMediaLink
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </SocialMediaLink>
          </SocialMedia>
          <StamperContainer>
            <Stamper />
          </StamperContainer>
        </Content>
      </Container>
    </StyledFooter>
  );
};

export { Footer };

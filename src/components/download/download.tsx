import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { Container as ContentContainer } from "../container";

import AppStore from "../../images/svg/app-store-icon.svg";
import GooglePlay from "../../images/svg/google-play-icon.svg";
import ArcTop from "../../images/svg/arc-top-icon.svg";
import ArcBottom from "../../images/svg/arc-bottom-icon.svg";

const Container = styled.div`
  margin-top: ${(props) => (props.theme.screens.lg ? "80px" : "37px")};
  padding: ${(props) =>
    props.theme.screens.lg ? "70px 0 105px 0" : "222px 0 150px 0"};
  background: ${(props) =>
    props.theme.screens.lg
      ? "url('/download-mobile.svg') 50% 0% no-repeat"
      : "url('/download-desktop.svg') 50% 0% no-repeat"};
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.theme.screens.lg ? "column" : "row")};
  justify-content: ${(props) =>
    props.theme.screens.lg ? "center" : "space-between"};
  align-items: center;
`;

const Text = styled.p`
  margin: 0 0 80px 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  color: #532800;
  font-size: 30px;
  line-height: 48px;
  text-align: ${(props) => (props.theme.screens.lg ? "center" : "left")};

  strong {
    font-weight: 700;
  }
`;

const LinksContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.theme.screens.lg ? "column" : "row")};
  gap: 20px 30px;
  align-items: center;
  margin-right: ${(props) => (props.theme.screens.lg ? "0" : "30px")};
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
`;

const ArcTopContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-64px, -35px);
`;

const ArcBottomContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(63px, 30px) rotate(-15deg);
`;

const variants = {
  top: {
    active: {
      x: -83,
      y: -45,
      rotate: -5,
    },
    inactive: {
      x: -64,
      y: -35,
      rotate: 0,
    },
  },
  bottom: {
    active: {
      x: 42,
      y: 45,
      rotate: -15,
    },
    inactive: {
      x: 28,
      y: 36,
      rotate: -5,
    },
  },
};

const Download: React.FC = () => {
  const [isHover, setHover] = React.useState(false);

  return (
    <Container>
      <ContentContainer>
        <Content>
          <Text>
            <strong>POBIERZ APLIKACJĘ</strong>
            <br />I SKORZYSTAJ Z PROMOCJI!
          </Text>
          <LinksContainer
            animate={isHover ? "active" : "inactive"}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Link
              href="https://play.google.com/store/apps?gl=PL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlay />
            </Link>
            <Link
              href="https://www.apple.com/pl/ios/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStore />
            </Link>
            <AnimatePresence>
              <ArcTopContainer key="top" variants={variants.top}>
                <ArcTop />
              </ArcTopContainer>
              <ArcBottomContainer key="bottom" variants={variants.bottom}>
                <ArcBottom />
              </ArcBottomContainer>
            </AnimatePresence>
          </LinksContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export { Download };

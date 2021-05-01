import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Logo } from "../components/logo";
import { Download } from "../components/download";
import { Headline } from "../components/headline";
import { Subheader } from "../components/subheader";
import { Button } from "../components/button";
import { List } from "../components/list";
import { Text } from "../components/text";
import { Container } from "../components/container";

import ScanIcon from "../images/svg/scan-icon.svg";
import CardIcon from "../images/svg/card-icon.svg";
import RewardIcon from "../images/svg/reward-icon.svg";
import DownloadIcon from "../images/svg/download-icon.svg";

const LogoContainer = styled.div`
  text-align: ${(props) => (props.theme.screens.lg ? "center" : "left")};
  padding-top: ${(props) => (props.theme.screens.lg ? "45px" : "67px")};
`;

const StyledPara = styled.p`
  margin: 10px 0 34px 0;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-family: Nunito, sans-serif;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

const HeroTextContainer = styled.div`
  padding-top: 227px;
  padding-bottom: ${(props) => (props.theme.screens.lg ? "100px" : "194px")};
`;

const GridImageContainer = styled.div`
  max-width: ${(props) => (props.theme.screens.lg ? "318px" : "464px")};
  margin: auto;
  width: 100%;
`;

const AppImageContainer = styled.div`
  max-width: ${(props) => (props.theme.screens.lg ? "320px" : "570px")};
  margin: auto;
  margin-top: ${(props) => {
    if (props.theme.screens.sm) return "-80px";
    if (props.theme.screens.md) return "-100px";
    if (props.theme.screens.lg) return "-120px";
    return "auto";
  }};
`;

const DownloadBtnContainer = styled.div`
  margin-top: ${(props) => (props.theme.screens.lg ? "40px" : "86px")};
`;

const DesktopTextGrid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 114px;
`;

const DesktopImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 40%;
  flex-shrink: 0;
`;

const DesktopGrid = styled.div`
  display: flex;
  column-gap: 196px;
  align-items: center;
`;

const DesktopAppImageWrapper = styled.div`
  position: relative;
`;

const DesktopTextContainer = styled.div`
  width: 48%;
  margin-right: 4%;
`;

const DesktopImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 48%;
`;

const App = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 260) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      heroMobile: file(name: { eq: "hero-mobile" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      heroDesktop: file(name: { eq: "hero-desktop" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shadowMobile: file(name: { eq: "shadow-mobile" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shadowDesktop: file(name: { eq: "shadow-desktop" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      app: file(name: { eq: "app" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 571) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      grid: allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/grid-/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 100, maxWidth: 464) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const breakpoints = useBreakpoint();

  const sectionFluid = breakpoints.lg
    ? [
        query.shadowMobile.childImageSharp.fluid,
        query.heroMobile.childImageSharp.fluid,
      ]
    : [
        query.shadowDesktop.childImageSharp.fluid,
        query.heroDesktop.childImageSharp.fluid,
      ];

  return (
    <Layout>
      <SEO />
      <BackgroundImage
        Tag="section"
        fluid={sectionFluid}
        style={{
          backgroundPosition: "0 100%, 0 100%",
        }}
      >
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <HeroTextContainer>
            <Headline fontSize={breakpoints.lg ? "30px" : "36px"}>
              <strong>ZBIERAJ PIECZĄTKI</strong>
              <br />I OSZCZĘDZAJ
            </Headline>
            <StyledPara>
              Przyłącz się do promocji i zgarnij
              <br />
              <strong>darmowego burgera uSzwagra24!</strong>
            </StyledPara>
            <Button>Dołączam do promocji!</Button>
          </HeroTextContainer>
        </Container>
      </BackgroundImage>
      <Container>
        {breakpoints.lg ? (
          <>
            <AppImageContainer>
              <Img fluid={query.app.childImageSharp.fluid} alt="app" />
            </AppImageContainer>
            <Subheader marginTop={52} marginBottom={10}>
              TYLKO 4 KROKI
            </Subheader>
            <Headline marginBottom={80} color="#532800">
              <strong>CO MUSISZ ZROBIĆ BY</strong> SKORZYSTAĆ Z PROMOCJI?
            </Headline>
          </>
        ) : (
          <DesktopAppImageWrapper>
            <DesktopTextContainer>
              <Subheader marginTop={56} marginBottom={10}>
                TYLKO 4 KROKI
              </Subheader>
              <Headline marginBottom={80} fontSize="36px" color="#532800">
                <strong>CO MUSISZ ZROBIĆ BY</strong> SKORZYSTAĆ Z PROMOCJI?
              </Headline>
            </DesktopTextContainer>
            <DesktopImage>
              <Img fluid={query.app.childImageSharp.fluid} alt="app" />
            </DesktopImage>
          </DesktopAppImageWrapper>
        )}
        <List
          items={[
            {
              icon: <DownloadIcon />,
              text: "Pobierz aplikację",
            },
            {
              icon: <ScanIcon />,
              text: "Zeskanuj kod QR z karty dołączonej do zakupów",
            },
            {
              icon: <CardIcon />,
              text: "Pieczątka zostaje dodana do Twojej wirtualnej karty",
            },
            {
              icon: <RewardIcon />,
              text: "Zebrane pieczątki wymieniaj na nagrody",
            },
          ]}
        />
        <Subheader
          marginTop={breakpoints.lg ? 80 : 140}
          marginBottom={6}
          textAlign="center"
        >
          JAK DZIAŁA U SZWAGRA 24?
        </Subheader>
        <Headline
          marginBottom={breakpoints.lg ? 20 : 44}
          color="#532800"
          textAlign="center"
          fontSize={breakpoints.lg ? "30px" : "36px"}
        >
          <strong>POZNAJ</strong> APLIKACJĘ
        </Headline>
        {breakpoints.lg ? (
          <>
            <GridImageContainer>
              <Img
                fluid={query.grid.edges[0].node.childImageSharp.fluid}
                alt=""
              />
            </GridImageContainer>
            <Headline
              marginBottom={20}
              color="#532800"
              fontSize="28px"
              lineHeight="40px"
            >
              <strong>NIE PRZEGAPISZ</strong>
              <br /> ŻADNEJ OKAZJI
            </Headline>
            <Text>
              Już nigdy nie przepadną Ci nagrody. Gdy wypełnisz kartę określoną
              ilością pieczątek - automatycznie dostaniesz powiadomienie że
              nagroda czeka do odebrania! Wybierając się na miasto w łatwy
              sposób sprawdzisz gdzie zahaczyć by odebrać benefity, dzięki
              sprytnej opcji "okolica".
            </Text>
            <Headline
              marginBottom={20}
              marginTop={40}
              color="#532800"
              fontSize="28px"
              lineHeight="40px"
            >
              <strong>WIESZ, GDZIE ZYSKUJESZ</strong> W OKOLICY
            </Headline>
            <Text>
              Dzięki zakładce "okolica" w aplikacji widzisz, gdzie znajdują się
              najbliższe lokale U Szwagra, w których możesz korzystać z
              promocji. Zawsze wiesz, gdzie wpaść, by skorzystać z benefitów.
            </Text>
            <GridImageContainer>
              <Img
                fluid={query.grid.edges[1].node.childImageSharp.fluid}
                alt=""
              />
            </GridImageContainer>
            <Headline
              marginBottom={20}
              color="#532800"
              fontSize="28px"
              lineHeight="40px"
            >
              <strong>JAK TO DZIAŁA?</strong>
            </Headline>
            <Text>
              Aplikacja Stamper działa do zarówno zamówień czy usług na miejscu,
              jak i zamówień na wynos. Niezależnie od tego jak i co zamawiasz,
              zawsze zostaniesz nagrodzony.
            </Text>
            <DownloadBtnContainer>
              <Button variant="secondary" href="/">
                Pobierz aplikację
              </Button>
            </DownloadBtnContainer>
          </>
        ) : (
          <DesktopGrid>
            <DesktopTextGrid>
              <div>
                <Headline
                  marginBottom={20}
                  color="#532800"
                  fontSize="28px"
                  lineHeight="40px"
                >
                  <strong>NIE PRZEGAPISZ</strong>
                  <br /> ŻADNEJ OKAZJI
                </Headline>
                <Text>
                  Już nigdy nie przepadną Ci nagrody. Gdy wypełnisz kartę
                  określoną ilością pieczątek - automatycznie dostaniesz
                  powiadomienie że nagroda czeka do odebrania! Wybierając się na
                  miasto w łatwy sposób sprawdzisz gdzie zahaczyć by odebrać
                  benefity, dzięki sprytnej opcji "okolica".
                </Text>
              </div>
              <div>
                <Headline
                  marginBottom={20}
                  marginTop={40}
                  color="#532800"
                  fontSize="28px"
                  lineHeight="40px"
                >
                  <strong>WIESZ, GDZIE ZYSKUJESZ</strong> W OKOLICY
                </Headline>
                <Text>
                  Dzięki zakładce "okolica" w aplikacji widzisz, gdzie znajdują
                  się najbliższe lokale U Szwagra, w których możesz korzystać z
                  promocji. Zawsze wiesz, gdzie wpaść, by skorzystać z
                  benefitów.
                </Text>
              </div>
              <div>
                <Headline
                  marginBottom={20}
                  color="#532800"
                  fontSize="28px"
                  lineHeight="40px"
                >
                  <strong>JAK TO DZIAŁA?</strong>
                </Headline>
                <Text>
                  Aplikacja Stamper działa do zarówno zamówień czy usług na
                  miejscu, jak i zamówień na wynos. Niezależnie od tego jak i co
                  zamawiasz, zawsze zostaniesz nagrodzony.
                </Text>
                <DownloadBtnContainer>
                  <Button variant="secondary" href="/">
                    Pobierz aplikację
                  </Button>
                </DownloadBtnContainer>
              </div>
            </DesktopTextGrid>
            <DesktopImageGrid>
              <GridImageContainer>
                <Img
                  fluid={query.grid.edges[0].node.childImageSharp.fluid}
                  alt=""
                />
              </GridImageContainer>
              <GridImageContainer>
                <Img
                  fluid={query.grid.edges[1].node.childImageSharp.fluid}
                  alt=""
                />
              </GridImageContainer>
            </DesktopImageGrid>
          </DesktopGrid>
        )}
      </Container>
      <Download />
    </Layout>
  );
};

export default App;

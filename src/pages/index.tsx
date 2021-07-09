import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import styled, { css } from "styled-components";
import { motion } from 'framer-motion';
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Logo } from "../components/logo";
import { Download } from "../components/download";
import { Headline } from "../components/headline";
import { Subheader } from "../components/subheader";
import { Button } from "../components/button";
import { GhostButton } from "../components/ghost-button";
import { List } from "../components/list";
import { Text } from "../components/text";
import { Container } from "../components/container";

import ScanIcon from "../images/svg/scan-icon.svg";
import CardIcon from "../images/svg/card-icon.svg";
import RewardIcon from "../images/svg/reward-icon.svg";
import DownloadIcon from "../images/svg/download-icon.svg";
import PodiumIcon from "../images/svg/podium-icon.svg";
import TrophyIcon from "../images/svg/trophy-icon.svg";

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

const RewardGrid = styled.div`
  display: flex;
  grid-gap: 30px;
  flex-direction: ${(props) => (props.theme.screens.lg ? "column" : "row")};
  margin-bottom: 90px;
`;

const RewardGridItem = styled.div`
  flex: 1;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  line-height: 27px;
  color: #532800;
`;

const RewardGridText = styled.p`
  margin: 20px 0 0 0;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.thead``;

const TableHeaderCell = styled.th`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #532800;
  text-align: left;
  padding: 10px 0;

  &:first-child {
    padding-left: 35px;
    padding-right: 35px;
  }
`;

const TableRow = styled.tr``;

const TableCell = styled(motion.td)`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #532800;
  font-weight: 700;
  padding: 20px 0;

  &:first-child {
    padding-left: 35px;
    padding-right: 35px;
  }

  &:last-child {
    font-weight: 400;
  }
`;

const TableBody = styled.tbody`
  ${TableRow} {
    &:first-child {
      background: rgba(254, 206, 81, 0.15);
      border: 1px solid #FECE51;
    }
    &:nth-child(2) {
      background: rgba(254, 206, 81, 0.08);
    }
    &:nth-child(n+2) {
      ${TableCell} {
        border-bottom: 1px solid #E5E5E5;
      }
    }
  }
`;

const NickAt = styled.span`
  color: #FECE51;
`;

const TableButtonContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Rewards = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.theme.screens.lg ? "column" : "row")};
  gap: 80px;
`;

const RewardItem = styled.div<{ isWinner?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => {
    if (props.isWinner) {
      if (props.theme.screens.lg) {
        return css`order: -1`;
      }
      return css`margin-bottom: 60px`;
    }
  }};
`;

const RewardSeparator = styled.div`
  margin: auto;
  width: 200px;
  height: 7px;
  border-radius: 14px;
  background-color: #FECE51;
`;

const RewardPosition = styled.div`
  margin-top: 30px;
  margin-bottom: 5px;
  color: #FECE51;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
`;

const RewardName = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #532800;
  text-align: center;
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
      reward: allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/reward/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, width: 218) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const breakpoints = useBreakpoint();
  const [isTableCollapsed, setTableCollapsed] = React.useState(false);
  const refTable = React.useRef<HTMLTableElement>(null);

  React.useEffect(() => {
    if (refTable.current) {
      const tableRows = Array.from(refTable.current.querySelectorAll('tbody tr') as NodeListOf<HTMLElement>);
      tableRows.forEach((row, idx) => {
        if (idx === 5 && isTableCollapsed) {
          row.style.opacity = '0.25';
        } else {
          row.style.opacity = '1';
        }
        if (idx > 5 && isTableCollapsed) {
          row.style.display = 'none';
        } else {
          row.style.display = 'table-row';
        }
      });
    }

  }, [refTable, isTableCollapsed]);

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
        <Subheader
          marginTop={breakpoints.lg ? 80 : 140}
          marginBottom={6}
          textAlign="center"
        >
            LISTA TOP 20
        </Subheader>
        <Headline
          marginBottom={breakpoints.lg ? 20 : 110}
          color="#532800"
          textAlign="center"
          fontSize={breakpoints.lg ? "30px" : "36px"}
        >
          <strong>KORZYSTAJ Z APLIKACJI,</strong><br/>ODBIERAJ DODATKOWE NAGRODY
        </Headline>
        <RewardGrid>
          <RewardGridItem>
            <ScanIcon />
            <RewardGridText>Kupując uSzwagra korzystaj z naszej aplikacji i zbieraj punkty</RewardGridText>
          </RewardGridItem>
          <RewardGridItem>
            <PodiumIcon />
            <RewardGridText>Co kwartał rozdajemy dodatkowe nagrody dla top 3 użytkowników, którzy zdobyli najwięcej punktów w&nbsp;tym okresie</RewardGridText>
          </RewardGridItem>
          <RewardGridItem>
            <TrophyIcon />
            <RewardGridText>Wchodź na naszą stronę i sprawdzaj jakie miejsce obecnie zajmujesz, rywalizuj z innymi i sięgaj po nagrody!</RewardGridText>
          </RewardGridItem>
        </RewardGrid>
        <Subheader
          marginTop={breakpoints.lg ? 80 : 140}
          marginBottom={6}
          textAlign="left"
        >
            LISTA TOP 20
        </Subheader>
        <Headline
          marginBottom={breakpoints.lg ? 20 : 60}
          color="#532800"
          textAlign="left"
          fontSize={breakpoints.lg ? "30px" : "36px"}
        >
          <strong>TABELA WYNIKÓW</strong>
        </Headline>
        <StyledTable ref={refTable}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Miejsce</TableHeaderCell>
              <TableHeaderCell>Użytkownik</TableHeaderCell>
              <TableHeaderCell>Ilość pieczątek</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12.</TableCell>
              <TableCell><NickAt>@</NickAt>nazwa_uzytkownika</TableCell>
              <TableCell>24</TableCell>
            </TableRow>
          </TableBody>
        </StyledTable>
        <TableButtonContainer>
          <GhostButton textColor='#532800' onClick={() => setTableCollapsed(!isTableCollapsed)}>{isTableCollapsed ? 'Wczytaj więcej' : 'Pokaż mniej'}</GhostButton>
        </TableButtonContainer>
        <Subheader
          marginTop={breakpoints.lg ? 80 : 110}
          marginBottom={6}
          textAlign="center"
        >
            NAGRODY
        </Subheader>
        <Headline
          marginBottom={breakpoints.lg ? 20 : 40}
          color="#532800"
          textAlign="center"
          fontSize={breakpoints.lg ? "30px" : "36px"}
        >
          <strong>NAGRODY DO ZGARNIĘCIA</strong><br/>W TYM KWARTALE
        </Headline>
        <Rewards>
          <RewardItem>
            <Img
              fixed={query.reward.edges[1].node.childImageSharp.fixed}
              alt=""
            />
            <RewardSeparator />
            <RewardPosition>2 MIEJSCE</RewardPosition>
            <RewardName>Zegarek marki lorem ipsum dolor</RewardName>
          </RewardItem>
          <RewardItem isWinner>
            <Img
              fixed={query.reward.edges[0].node.childImageSharp.fixed}
              alt=""
            />
            <RewardSeparator />
            <RewardPosition>1 MIEJSCE</RewardPosition>
            <RewardName>Zegarek marki lorem ipsum dolor</RewardName>
          </RewardItem>
          <RewardItem>
            <Img
              fixed={query.reward.edges[2].node.childImageSharp.fixed}
              alt=""
            />
            <RewardSeparator />
            <RewardPosition>3 MIEJSCE</RewardPosition>
            <RewardName>Zegarek marki lorem ipsum dolor</RewardName>
          </RewardItem>
        </Rewards>
      </Container>
      <Download />
    </Layout>
  );
};

export default App;

import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const LogoContainer = styled.h1`
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  width: 190px;
`;

const Logo: React.FC = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 260) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <LogoContainer>
      <StyledLink to="/">
        <Img fluid={logo.childImageSharp.fluid} alt="u szwagra" />
      </StyledLink>
    </LogoContainer>
  );
};

export { Logo };

import styled, { css } from "styled-components";

type Props = {
  color?: string;
  textAlign?: "left" | "center" | "right";
  fontSize?: string;
  lineHeight?: string;
  marginTop?: number;
  marginBottom?: number;
};

const Headline = styled.h4<Props>`
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  ${({
    color,
    textAlign,
    fontSize,
    lineHeight,
    marginTop,
    marginBottom,
  }) => css`
    color: ${color};
    text-align: ${textAlign};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    margin-top: ${marginTop}px;
    margin-bottom: ${marginBottom}px;
  `};

  strong {
    font-weight: 700;
  }
`;

Headline.defaultProps = {
  color: "#fff",
  textAlign: "left",
  fontSize: "30px",
  lineHeight: "48px",
  marginTop: 0,
  marginBottom: 0,
};

export { Headline };

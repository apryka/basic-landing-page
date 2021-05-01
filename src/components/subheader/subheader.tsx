import styled, { css } from "styled-components";

type Props = {
  textAlign?: "left" | "center" | "right";
  marginTop?: number;
  marginBottom?: number;
};

const Subheader = styled.h6<Props>`
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  color: #fece51;
  font-size: 18px;
  line-height: 27px;
  ${({ textAlign, marginTop, marginBottom }) => css`
    text-align: ${textAlign};
    margin-top: ${marginTop}px;
    margin-bottom: ${marginBottom}px;
  `};
`;

Subheader.defaultProps = {
  textAlign: "left",
  marginTop: 0,
  marginBottom: 0,
};

export { Subheader };

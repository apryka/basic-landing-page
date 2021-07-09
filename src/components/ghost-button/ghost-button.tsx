import styled from "styled-components";

type Props = {
  textColor?: string;
};

const GhostButton = styled.a<Props>`
  display: inline-block;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 12px 20px;
  background: transparent;
  text-decoration: none;
  border-radius: 53px;
  border: 2px solid #FECE51;
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: rgba(254, 206, 81, 0.8);
  }
`;

GhostButton.defaultProps = {
  textColor: "#fff",
};

export { GhostButton };

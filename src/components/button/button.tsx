import styled from "styled-components";

type Props = {
  variant?: "primary" | "secondary";
};

const Button = styled.a<Props>`
  display: inline-block;
  font-family: Nunito, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 12px 20px;
  background-color: #fece51;
  text-decoration: none;
  border-radius: 53px;
  color: ${({ variant }) => (variant === "primary" ? "#fff" : "#532800")};
  cursor: pointer;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: rgba(254, 206, 81, 0.8);
  }
`;

Button.defaultProps = {
  variant: "primary",
};

export { Button };

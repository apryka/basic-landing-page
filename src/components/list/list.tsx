import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: 20px 60px;
  grid-template-columns: ${(props) =>
    props.theme.screens.lg ? "repeat(2, 1fr)" : "repeat(4, 1fr)"};
  counter-reset: count;
`;

const ItemText = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #532800;
  font-family: Poppins, sans-serif;
  font-weight: 700;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${ItemText} {
    counter-increment: count;

    &:before {
      content: counter(count) ".";
      color: #fece51;
      margin-right: 1ch;
    }
  }
`;

type ListItem = {
  icon: React.ReactNode;
  text: string;
};

type Props = {
  items: ListItem[];
};

const List: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      {items.map(({ icon, text }) => (
        <Item key={text}>
          {icon}
          <ItemText>{text}</ItemText>
        </Item>
      ))}
    </Container>
  );
};

export { List };

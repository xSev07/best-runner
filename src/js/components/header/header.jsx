import React from "react";
import styled from "styled-components";
import {MainColor, NeutralColor, Size} from "../../consts/styles";

const StyledHeader = styled.header`
  padding-top: 1px;
  border-bottom: 1px solid ${MainColor.SECONDARY};
`;

const Nav = styled.nav`
  max-width: ${Size.DESKTOP_WIDTH};
  margin: 0 auto;
`;

const List = styled.ul`
  display: flex;
  font-size: 1.4rem;
`;

const Item = styled.li`
  &:last-child {
    margin-left: auto;
  }
`;

const Link = styled.a`
  display: inline-block;
  padding: 15px 20px;
  color: ${(props) => props.active ? NeutralColor.PRIMARY : MainColor.SECONDARY};
  cursor: ${(props) => props.active && `default`};
  
  &:hover,
  &:focus {
    color: ${(props) => props.active ? NeutralColor.PRIMARY : MainColor.PRIMARY};
    background-color: ${(props) => !props.active && MainColor.SECONDARY};
  }
  
  &:active {
    color: ${MainColor.SUCCESS};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <List>
          <Item>
            <Link href="/">Main</Link>
          </Item>
          <Item>
            <Link active>Trainings</Link>
          </Item>
          <Item>
            <Link href="/stats">Statistics</Link>
          </Item>
          <Item>
            <Link href="/login">Login</Link>
          </Item>
        </List>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

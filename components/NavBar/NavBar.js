import React from "react";
import styled from "styled-components";
import Logo from "../ShortlyLogo";
import { COLORS, WEIGHTS } from "../../constants";

function NavBar() {
  return (
    <Header>
      <LinkHome>
        <Logo fill={COLORS.veryDarkVioletLogo} />
      </LinkHome>
      <Nav>
        <List>
          <ListItem>
            <NavLink>Features</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Pricing</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Resources</NavLink>
          </ListItem>
        </List>
      </Nav>
      <NavLink>Login</NavLink>
      <NavButton>Sign Up</NavButton>
    </Header>
  );
}

const Header = styled.header`
  margin: 48px auto 0;
  width: 90%;
  max-width: ${1110 / 16}rem;
  display: flex;
  align-items: center;
`;

const LinkHome = styled.a`
  display: block;
  margin-right: 45px;
  width: 120px;
`;

const Nav = styled.nav`
  margin-right: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 29px;
`;

const ListItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.grayishViolet};
  font-weight: ${WEIGHTS.bold};
  font-size: ${15 / 16}rem;
`;

const NavButton = styled.a`
  display: block;
  background: ${COLORS.cyan};
  color: ${COLORS.white};
  font-size: ${15 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  padding: ${9 / 16}rem ${24 / 16}rem;
  border-radius: 28px;
  margin-left: 37px;
`;

export default NavBar;

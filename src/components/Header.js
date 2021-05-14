import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

function Header() {
  return (
    <Container>
      <Nav>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="Logotype" />
          </Link>
        </LogoContainer>
        <LinksContainer>
          <Link to="/search/javascript">Search</Link>
          <Link to="#how-it-works">How it works</Link>
          <Link to="#about">About</Link>
        </LinksContainer>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LogoContainer = styled.div`

`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  a:not(:last-child) {
    margin-right: 21px;
  }
`;

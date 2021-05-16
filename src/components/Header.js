import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as logo } from '../assets/logo.svg';

function Header() {
  return (
    <StyledHeader>
      <Nav>
        <LogoContainer>
          <Link to="/"><StyledLogo /></Link>
        </LogoContainer>
        <LinksContainer>
          <StyledLink to="/search/javascript">Search</StyledLink>
          <StyledLink to="/#how-it-works">How it works</StyledLink>
          <StyledLink to="/#about">About</StyledLink>
        </LinksContainer>
      </Nav>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LogoContainer = styled.div`

`;

const StyledLogo = styled(logo)`
  margin-bottom: -8px;
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:not(:last-child) {
    margin-right: 21px;
  }
`;

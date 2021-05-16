import React from 'react';
import styled from 'styled-components';

function HomePage() {
  return (
    <Container>
      <h1>Home page</h1>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

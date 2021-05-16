import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from '../App';

function setup(initialPaht = '/') {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPaht]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
}

describe('Header', () => {
  test('Logo link leads to homepage when clicked', () => {
    setup('/search/javascript');

    // const logoLink = screen.getByRole('link', { name: /logo})

    screen.debug();
  });
});

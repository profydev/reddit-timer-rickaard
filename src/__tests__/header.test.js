import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';
import App from '../App';

function setup(initialPath = '/') {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
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
    // setup('/search/javascript');
    render(
      <MemoryRouter initialEntries={['/search/javascript']}>
        <App />
      </MemoryRouter>,
    );

    // userEvent.click(screen.getByRole('link', {name: /search/i }));

    // const logoLink = screen.getByRole('link', {name: /logo.svg/i });
    // userEvent.click(logoLink);

    // const searchText = screen.getByText(/search page/i);
    // expect(searchText).toBeInTheDocument();
    screen.debug();
  });
});

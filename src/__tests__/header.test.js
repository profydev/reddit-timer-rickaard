import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
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

describe('Header links', () => {
  test('Logo link leads to homepage when clicked', () => {
    // load App up in search page
    setup('/search/javascript');

    const logoLink = screen.getByRole('link', { name: /logo.svg/i });
    userEvent.click(logoLink);

    const homePageText = screen.getByText(/home page/i);
    expect(homePageText).toBeInTheDocument();
  });

  test('navigates to search page when search link is clicked', () => {
    const { history } = setup();

    const searchLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchLink);

    const searchtext = screen.getByText(/search page/i);

    expect(searchtext).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
  });

  test('navigates to /#about when about link is clicked', () => {
    const { history } = setup();

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    expect(history.location.hash).toEqual('#about');
  });

  test('navigates to /#how-it-works when "How it works" link is clicked', () => {
    const { history } = setup();

    const aboutLink = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(aboutLink);

    expect(history.location.hash).toEqual('#how-it-works');
  });
});

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './globalStyles';
import theme from './theme';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/search"><SearchPage /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

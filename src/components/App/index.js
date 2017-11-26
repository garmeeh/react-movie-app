import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

import Header from '../Header/Header';
import SearchContainer from '../../containers/Search/SearchContainer';
import MovieDetailContainer from '../../containers/MovieDetail/MovieDetailContainer';

const AppWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={SearchContainer} />
          <Route path="/search/:searchTerm" component={SearchContainer} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Header from '../Header/Header';
import HomePageContainer from '../../containers/HomePage/HomePageContainer';
import MovieDetailContainer from '../../containers/MovieDetail/MovieDetailContainer';

import styled from 'styled-components';

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
          <Route exact={true} path="/" component={HomePageContainer} />
          <Route path="/search/:searchTerm" component={HomePageContainer} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;

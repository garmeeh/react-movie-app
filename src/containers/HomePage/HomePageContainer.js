import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchRequest } from '../../actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';

const Button = styled.button`
  padding: 0.5em;
  color: #ffffff;
  background: #3d4347;
  border: 1px solid #3d4347;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 10px;
`;

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: props.match.params.searchTerm || ''
    };
  }

  componentDidMount() {
    this.doSearch();
  }

  updateLocalState = state => {
    this.setState(state);
  };

  updateSearchTerm = event => {
    this.updateLocalState({
      searchTerm: event.target.value
    });
  };

  doSearch = () => {
    if (this.state.searchTerm === '') return;
    this.props.searchRequest(this.state.searchTerm);
  };

  checkKey = event => {
    if (event.keyCode === 13) {
      this.doSearch();
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          placeholder={'Search movies...'}
          onChange={this.updateSearchTerm}
          onKeyDown={this.checkKey}
        />
        <Button onClick={this.doSearch}>Find Me The Movie!</Button>
        <p>Total Results: {this.props.search.totalResults || 0}</p>
        <MovieList results={this.props.search.results} />
      </div>
    );
  }
}

const mapStateToProps = ({ search }) => {
  return {
    search
  };
};

const mapDispatchToProps = dispatch => ({
  searchRequest: searchTerm => dispatch(searchRequest(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);

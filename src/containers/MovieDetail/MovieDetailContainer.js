import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailRequest } from '../../actions';
import MovieDetailPage from '../../components/MovieDetailPage/MovieDetailPage';
class MovieDetailContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.detailRequest(this.props.match.params.id);
    }
  }

  render() {
    return <MovieDetailPage {...this.props.movie} />;
  }
}

const mapStateToProps = ({ search }) => {
  return {
    movie: search.movie
  };
};

const mapDispatchToProps = dispatch => ({
  detailRequest: id => dispatch(detailRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MovieDetailContainer
);

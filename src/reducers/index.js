import * as actions from '../actions';

const initialState = {
  results: [],
  totalResults: 0,
  loading: false,
  movie: null
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        results: action.response.Search,
        totalResults: action.response.totalResults
      });
    case actions.DETAIL_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.DETAIL_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        movie: action.response
      });
    default:
      return state;
  }
};

import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getMovies } from '../api/movieApi';
import * as actions from '../actions';

export function* requestSearchResults({ searchTerm }) {
  try {
    const { Search, totalResults } = yield call(getMovies, searchTerm);
    yield put(actions.searchSuccess({ Search, Response, totalResults }));
    yield put(push(`/search/${searchTerm}`));
  } catch (error) {}
}

export function* searchResults() {
  yield takeLatest(actions.SEARCH_REQUEST, requestSearchResults);
}

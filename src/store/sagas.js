import { fork, all } from 'redux-saga/effects';
import { searchResults } from '../sagas/SearchSaga';
import { movieDetails } from '../sagas/MovieSaga';

export default function* rootSagas() {
  yield all([fork(searchResults), fork(movieDetails)]);
}

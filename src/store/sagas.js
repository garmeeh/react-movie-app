import { fork, all } from 'redux-saga/effects';
import { searchResults, movieDetails } from '../sagas/';

export default function* rootSagas() {
  yield all([fork(searchResults), fork(movieDetails)]);
}

import { call, put, takeLatest } from 'redux-saga/effects';
import { getMovie } from '../api/movieApi';
import * as actions from '../actions';

export function* requestMovieDetails({ id }) {
  try {
    const movie = yield call(getMovie, id);
    yield put(actions.detailSuccess(movie));
  } catch (error) {}
}

export function* movieDetails() {
  yield takeLatest(actions.DETAIL_REQUEST, requestMovieDetails);
}

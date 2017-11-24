import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import rootSagas from './sagas';

export default state => {
  const sagaMiddleware = createSagaMiddleware();
  const history = createHistory();
  const routerMiddleW = routerMiddleware(history);
  const middleware = applyMiddleware(sagaMiddleware, routerMiddleW);
  const store = createStore(rootReducer, state, middleware);
  const task = sagaMiddleware.run(rootSagas);
  return { store, task, closeStore: () => store.dispatch(END) };
};

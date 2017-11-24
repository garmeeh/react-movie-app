import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { search } from '../reducers';

export default combineReducers({ search, router: routerReducer });

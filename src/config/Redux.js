import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducers from './../data/Reducers';
import history from './routes/History';

const routerHistoryMiddleware = routerMiddleware(history);

export const middlewares = [
  thunk,
  routerHistoryMiddleware,
];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);


import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loading from './loading/reducer';
import users from './users/reducer';
import login from './login/reducer';

export default history =>
  combineReducers({
    loading,
    users,
    login,
    router: connectRouter(history),
  });

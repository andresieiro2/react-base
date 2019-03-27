import * as types from './actionTypes';
import * as LoadingActions from '../loading/actions';
import { get } from '../../utils/request';

import env from '../../env';

const { API_URL } = env;

export const setListUsers = listUsers => ({
  type: types.SET_LIST_USERS,
  listUsers,
});

export const setUserInfo = userInfo => ({
  type: types.USER_INFO,
  userInfo,
});

export const getListUsers = limit => async dispatch => {
  dispatch(LoadingActions.setLoading(true));

  try {
    const users = await get(`${API_URL}/users?since=${limit}`);

    dispatch(setListUsers(users));
  } catch (err) {
    console.log(err);
  }

  dispatch(LoadingActions.setLoading(false));
};

export const getUserDetail = login => async dispatch => {
  dispatch(LoadingActions.setLoading(true));

  try {
    const info = await get(`${API_URL}/users/${login}`);

    dispatch(setUserInfo(info));
  } catch (err) {
    console.log(err);
  }

  dispatch(LoadingActions.setLoading(false));
};

import * as types from './actionTypes';

const initialState = {
  list: [],
  detail: {},
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_LIST_USERS:
      return {
        ...state,
        list: [...state.list, ...action.listUsers],
        detail: {},
      };
    case types.USER_INFO:
      return {
        ...state,
        detail: {
          ...action.userInfo,
        },
      };
    default:
      return {
        ...state,
      };
  }
}

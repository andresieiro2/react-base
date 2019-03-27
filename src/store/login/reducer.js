import * as types from './actionTypes';

const initialState = {};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_USER_LOGIN: {
      return {
        ...state,
        ...action.user,
      };
    }
    case types.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
}

import _firebase from 'firebase';

import * as types from './actionTypes';

import firebase from '../../utils/firebase';

import { store } from '../Redux';

export const setUserLogin = user => ({
  type: types.SET_USER_LOGIN,
  user,
});

export const logoutUser = () => ({
  type: types.LOGOUT,
});

export const userGoogleLogin = () => dispatch => {
  const provider = new _firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'pt';
  firebase
    .auth()
    .signInWithPopup(provider)
    .catch(function(error) {
      console.log(error);
    });
};

export const observerAuth = () => {
  // return dispatch =>
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      store.dispatch(setUserLogin(user));
      localStorage.setItem('logged', true);
      // ...
    } else {
      // User is signed out.
      store.dispatch(logoutUser());
      localStorage.removeItem('logged');
      // ...
    }
  });
};

export const logout = () => {
  firebase.auth().signOut();
  store.dispatch(logoutUser());
};

import { SubmissionError } from 'redux-form';
import { LOGIN_USER, SIGN_OUT_USER } from './types';
import { closeModal } from './modalActions';

import firebase from 'firebase';

export const login = creds => {
  return async dispatch => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      // show the error inside the redux form
      throw new SubmissionError({
        _error: error.message
      });
    }
  };

  // return {
  //   type: LOGIN_USER,
  //   payload: creds
  // };
};

export const logout = () => {
  return {
    type: SIGN_OUT_USER
  };
};

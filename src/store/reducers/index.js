import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: formReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  toastr: toastrReducer
});

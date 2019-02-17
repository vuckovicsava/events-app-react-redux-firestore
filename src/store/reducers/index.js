import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  form: formReducer,
  events: eventReducer,
  modals: modalReducer
});

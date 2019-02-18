import { toastr } from 'react-redux-toastr';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './types';

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: event
      });
      toastr.success('Success', 'Event has been created');
    } catch (err) {
      toastr.error('There was an error', err.message);
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: event
      });
      toastr.success('Success', 'Event has been updated');
    } catch (err) {
      toastr.error('There was an error', err.message);
    }
  };
};

export const deleteEvent = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
      toastr.success('Success', 'Event has been deleted');
    } catch (err) {
      toastr.error('There was an error', err.message);
    }
  };
};

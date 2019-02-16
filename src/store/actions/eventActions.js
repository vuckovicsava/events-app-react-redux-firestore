import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './types';

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event
});

export const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: event
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: id
});

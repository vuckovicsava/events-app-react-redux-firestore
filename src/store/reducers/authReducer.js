import { LOGIN_USER, SIGN_OUT_USER } from '../actions/types';

const initialState = {
  currentUser: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.email
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null
      };
    default:
      return state;
  }
}

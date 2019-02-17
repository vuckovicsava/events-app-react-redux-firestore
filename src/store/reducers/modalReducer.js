import { MODAL_OPEN, MODAL_CLOSE } from '../actions/types';

const initialState = null;

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_OPEN:
      const { modalType, modalProps } = action.payload;
      return { modalType, modalProps };
    case MODAL_CLOSE:
      return null;
    default:
      return state;
  }
}

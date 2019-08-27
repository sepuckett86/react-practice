const initialState = '';
import { UPDATE_FORM_ID } from '../actions/videoFormActions';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_FORM_ID:
      return action.payload;
    default:
      return state;
  }
}

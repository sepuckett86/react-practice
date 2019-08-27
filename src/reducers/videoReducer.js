const initialState = [];
import { ADD_VIDEO } from '../actions/videoActions';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_VIDEO:
      return [...state, action.payload];
    default:
      return state;
  }
}


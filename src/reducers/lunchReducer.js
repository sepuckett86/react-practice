import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, CLEAR_FOOD } from '../actions/lunchActions';

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

export default function lunchReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case ADD_CHIPS: 
      return { ...state, chips: [...state.chips, action.payload] };
    case CLEAR_FOOD:
      return { ...state, [action.payload]: [] };
    default:
      return state;
  }
}

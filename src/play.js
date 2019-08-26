import { createStore } from 'redux';
import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, CLEAR_FOOD } from './actions/lunchActions';
import { addDrink, addSandwich, addChips, clearFood } from  './actions/lunchActions';

const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};


function reducer(state = initialState, action) {
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

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addDrink('Coca Cola'));
store.dispatch(addDrink('Sprite'));
store.dispatch(addSandwich('Ham'));
store.dispatch(addSandwich('Caprese'));
store.dispatch(addChips('Pringles'));

store.dispatch(clearFood('drink'));
store.dispatch(clearFood('sandwich'));
store.dispatch(clearFood('chips'));

unsubscribe();

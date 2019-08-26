/* action:
{
  type: ADD_SANDWICH,
  payload: sandwich
};
*/

/* reducer:
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
*/

const state = {};

const store = {
  getState: function() {
    return state;
  },
  dispatch: function(action) {
    // placeholder
    return action;
  },
  subscribe: function(listener) {
    // placeholder
    return listener;
  },
  replaceReducer: function(nextReducer) {
    // placeholder
    return nextReducer;
  }
}; 

let reducers = () => {};

function createStore(reducer) {
  reducers = reducer;
  reducer();
  return store;
}

// reducer has state and action 
const redux = { createStore };

export default redux;

const { createStore } = require('redux');

const initialState = {
  stuff: 'empty'
};

function reducer(state = initialState, action) {
  console.log('action received', action);
  switch(action.type) {
    case 'DO_STUFF':
      return { ...state, stuff: action.payload };
    default: 
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({
  type: 'DO_STUFF',
  payload: 'Make toys!'
});

console.log('state', store.getState());

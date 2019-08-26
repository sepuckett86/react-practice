import store from './store';

const app = {
  store,
  reducers: (() => {})
};

function createStore(reducer) {
  app.reducers = reducer;
}

// reducer has state and action 
const redux = { createStore };

export default redux;

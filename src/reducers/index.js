import { combineReducers } from 'redux';
import lunch from './lunchReducer';
import doReducer from './doReducer';

export default combineReducers({
  lunch,
  do: doReducer
});

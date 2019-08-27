import { combineReducers } from 'redux';
import controlsReducer from './controlsReducer';

export default combineReducers({
  controls: controlsReducer
});

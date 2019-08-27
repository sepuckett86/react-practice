import { combineReducers } from 'redux';
import videoFormReducer from './videoFormReducer';
import videoReducer from './videoReducer';

export default combineReducers({
  form: videoFormReducer,
  videos: videoReducer
});

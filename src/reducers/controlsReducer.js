import { UPDATE_TITLE, UPDATE_SUBTITLE } from '../actions/controlsActions';

const initialState = {
  title: '',
  subtitle: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case UPDATE_SUBTITLE:
      return { ...state, subtitle: action.payload };
    default:
      return state;
  }
};

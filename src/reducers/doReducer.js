const initialState = {
  stuff: 'undone'
};

export default function doReducer(state = initialState, action) {
  return { ...state, stuff: `Doing ${action.type}` };
}

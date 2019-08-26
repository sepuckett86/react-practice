export const getChips = state => state.lunch.chips;

export const getTotalChips = state => getChips(state).length;

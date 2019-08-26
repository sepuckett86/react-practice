// Make constant action types
export const ADD_DRINK = 'ADD_DRINK';
export const ADD_SANDWICH = 'ADD_SANDWICH';
export const ADD_CHIPS = 'ADD_CHIPS';
export const CLEAR_FOOD = 'CLEAR_FOOD';

// Make action creators
export function addDrink(drink) {
  return {
    type: ADD_DRINK,
    payload: drink
  };
}

export function addSandwich(sandwich) {
  return {
    type: ADD_SANDWICH,
    payload: sandwich
  };
}

export function addChips(chips) {
  return {
    type: ADD_CHIPS,
    payload: chips
  };
}

export function clearFood(food) {
  return {
    type: CLEAR_FOOD,
    payload: food
  };
}

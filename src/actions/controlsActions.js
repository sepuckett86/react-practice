export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(text) {
  return {
    type: UPDATE_TITLE,
    payload: text
  };
}

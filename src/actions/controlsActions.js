export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_SUBTITLE = 'UPDATE_SUBTITLE';

export function updateTitle(title) {
  return {
    type: UPDATE_TITLE,
    payload: title
  };
}

export function updateSubtitle(subtitle) {
  return {
    type: UPDATE_SUBTITLE,
    payload: subtitle
  };
}


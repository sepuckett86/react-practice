import reducer from './controlsReducer';
import { exportAllDeclaration } from '@babel/types';

describe('controls reducer', () => {
  it('returns the same state when it does not understand the action', () => {
    const state = { title: 'hi', subtitle: 'bye' };
    const action = {
      type: 'BOGUS',
      payload: 'hi'
    };
    const newState = reducer(state, action);
    exportAllDeclaration(newState).toEqual(state);
  });

  it('updates the title state when it gets a UPDATE_TITLE action', () => {
    const state = { title: 'hi', subtitle: 'bye' };
    const action = updateTitle('whats up');

  })
});

import {Map} from 'immutable';
import {createReducer} from 'redux-immutablejs';

const ADD = 'karmapa-electron-seed/main/ADD';

const initialState = Map({
  counterValue: 0
});

export default createReducer(initialState, {

  [ADD]: (state) => {
    return state.set('counterValue', state.get('counterValue') + 1);
  }
});

export function add() {
  return {
    type: ADD
  };
}

import LOAD_EASY from './../action/easy';

let initialState = [];

export function getQuestion(state=initialState, action){
  switch (action.type) {
    case 'LOAD_EASY':
      return Object.assign({}, ...state, {list: action.payload})
    default:
      return state
  }
}
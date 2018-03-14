import 'GET_QUESTION' from './../action/questionEasy.js'


function printQuestion(state, action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return { }
    default:
      return state
  }
}
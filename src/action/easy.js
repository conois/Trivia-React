import axios from 'axios';

export const LOAD_EASY = 'LOAD_EASY';

export function loadEasy () {
	const questions = [{
		id : 'uno',
		question: '¿Esta es una pregunta?', 
		correct_answer: 'True',
	}, 
	 {
	 	id : 'dos', 
		question: 'Esta es otra pregunta', 
		correct_answer: 'False',
	 }]

	return {
		type: LOAD_EASY,
		payload: questions
	}

}



/*
export function loadEasy() {
  return(dispatch, getState) => {
    axios.get("https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean")
      .then((response) => {
        dispatch({
          type: LOAD_EASY,
          payload: response.data.results
        })
      })
  }
}
*/
import axios from 'axios';

export const LOAD_EASY = 'LOAD_EASY';

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

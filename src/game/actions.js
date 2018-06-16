import { GAME, WORDS } from "../actionTypes";

export const loadData = () => dispatch => {
  dispatch({ type: WORDS.LOAD_REQUEST });
  fetch("./words.json")
    .then(response => {
      if (response.status !== 200) {
        dispatch({ type: WORDS.LOAD_FAILED, error: response.status });
      }

      response
        .json()
        .then(payload => dispatch({ type: WORDS.LOAD_SUCCESS, payload }));
    })
    .catch(error => dispatch({ type: WORDS.LOAD_FAILED, error }));
};

export const startGame = () => ({ type: GAME.START });

export const guess = article => ({ type: GAME.GUESS, article });
export const guessSuccess = article => ({ type: GAME.GUESS_SUCCESS, article });
export const guessFailed = article => ({ type: GAME.GUESS_FAILED, article });
export const gotoNextWord = () => ({ type: GAME.GOTO_NEXT_WORD });

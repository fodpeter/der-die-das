import { GAME } from "../actionTypes";
import { guessSuccess, guessFailed, gotoNextWord } from "./actions";
import "rxjs";
import { getWord } from "./gameSelector";

const getResult = (article, state) =>
  getWord(state).get("article") === article
    ? guessSuccess(article)
    : guessFailed(article);

export const handleGuess = (action$, store) =>
  action$
    .ofType(GAME.GUESS)
    .map(({ article }) => getResult(article, store.getState()));

export const redirectToNextWord = action$ =>
  action$
    .ofType(GAME.GUESS_SUCCESS)
    .delay(500)
    .map(() => gotoNextWord());

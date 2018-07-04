import { GAME } from "../actionTypes";
import { guessSuccess, guessFailed, gotoNextWord } from "./actions";
import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { getWord } from "./gameSelector";

const getResult = (article, state) =>
  getWord(state).get("article") === article
    ? guessSuccess(article)
    : guessFailed(article);

export const handleGuess = (action$, state$) =>
  action$.pipe(
    ofType(GAME.GUESS),
    map(({ article }) => getResult(article, state$.value))
  );

export const redirectToNextWord = action$ =>
  action$.pipe(
    ofType(GAME.GUESS_SUCCESS),
    delay(500),
    map(() => gotoNextWord())
  );

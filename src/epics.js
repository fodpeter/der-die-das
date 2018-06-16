import { combineEpics } from "redux-observable";
import { handleGuess, redirectToNextWord } from "./game/gameEpic";

export default combineEpics(handleGuess, redirectToNextWord);

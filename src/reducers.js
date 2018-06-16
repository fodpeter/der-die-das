import { combineReducers } from "redux-immutable";
import game from "./game/gameReducer";
import words from "./game/wordsReducer";

export default combineReducers({
  game,
  words
});

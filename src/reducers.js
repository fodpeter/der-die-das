import { combineReducers } from "redux-immutable";
import game from "./game/gameReducer";
import words from "./game/wordsReducer";
import statistics from "./game/statisticsReducer";

export default combineReducers({
  game,
  words,
  statistics
});

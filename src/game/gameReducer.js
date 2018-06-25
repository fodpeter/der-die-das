import { GAME } from "../actionTypes";
import { fromJS, Map } from "immutable";
import { ANSWERS } from "./constants";

const game = (state = fromJS({ frozen: false }), action) => {
  switch (action.type) {
    case GAME.START:
      return state
        .set("started", true)
        .set("wordIndex", 0)
        .set("answers", Map());
    case GAME.STOP:
      return state.set("started", false);
    case GAME.GUESS_FAILED:
      return state.setIn(["answers", action.article], ANSWERS.FAIL);
    case GAME.GUESS_SUCCESS:
      return state
        .setIn(["answers", action.article], ANSWERS.GOOD)
        .set("frozen", true);
    case GAME.GOTO_NEXT_WORD:
      return state
        .set("answers", Map())
        .set("frozen", false)
        .update("wordIndex", idx => idx + 1);
    default:
      return state;
  }
};

export default game;

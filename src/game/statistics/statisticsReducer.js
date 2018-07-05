import { GAME } from "../../actionTypes";
import { fromJS } from "immutable";

const reset = state => state.set("lives", 3).set("counter", 0);

const statistics = (state = fromJS({ lives: 0, counter: 0 }), action) => {
  switch (action.type) {
    case GAME.START:
      return reset(state);
    case GAME.GUESS_FAILED: {
      const lives = state.get("lives");
      if (lives > 1) {
        return state.set("lives", lives - 1);
      }
      return reset(state);
    }
    case GAME.GUESS_SUCCESS:
      return state.update("counter", counter => counter + 1);
    default:
      return state;
  }
};

export default statistics;

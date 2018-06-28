import { GAME } from "../actionTypes";
import { Map } from "immutable";

const reset = state => state.set("lifes", 3).set("counter", 0);

const statistics = (state = Map(), action) => {
  switch (action.type) {
    case GAME.START:
      return reset(state);
    case GAME.GUESS_FAILED: {
      const lifes = state.get("lifes");
      if (lifes > 1) {
        return state.set("lifes", lifes - 1);
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

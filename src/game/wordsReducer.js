import { WORDS, LOADING_STATE } from "../actionTypes";
import { fromJS, Map } from "immutable";

const words = (state = Map(), action) => {
  switch (action.type) {
    case WORDS.LOAD_REQUEST:
      return state.set("loadingState", LOADING_STATE.LOADING);
    case WORDS.LOAD_SUCCESS:
      return state
        .set("loadingState", LOADING_STATE.READY)
        .set("data", fromJS(action.payload));
    case WORDS.LOAD_FAILED:
      return state.set("loadingState", LOADING_STATE.FAILED);
    default:
      return state;
  }
};

export default words;

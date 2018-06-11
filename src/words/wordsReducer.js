import { WORDS, LOADING_STATE } from "../actionTypes";

const words = (state = {}, action) => {
  switch (action.type) {
    case WORDS.LOAD:
      return { loadingState: LOADING_STATE.LOADING, data: state.data };
    case WORDS.LOAD_SUCCESS:
      return { loadingState: LOADING_STATE.SUCCESS, data: action.payload };
    case WORDS.LOAD_FAILED:
      return { loadingState: LOADING_STATE.FAILED };
    default:
      return state;
  }
};

export default words;

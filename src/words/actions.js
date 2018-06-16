import { WORDS } from "../actionTypes";

export const loadData = () => dispatch => {
  dispatch({ type: WORDS.LOAD_REQUEST });
  fetch("./words.json")
    .then(response => {
      if (response.status !== 200) {
        dispatch({ type: WORDS.LOAD_FAILED, error: response.status });
      }

      response
        .json()
        .then(payload => dispatch({ type: WORDS.LOAD_SUCCESS, payload }));
    })
    .catch(error => dispatch({ type: WORDS.LOAD_FAILED, error }));
};

import { WORDS } from "../actionTypes";

export const loadData = () => dispatch => {
  fetch("./words.json")
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        dispatch({ type: WORDS.LOAD_FAILED, error: response.status });
      }

      response
        .json()
        .then(payload => dispatch({ type: WORDS.LOAD_SUCCESS, payload }));
    })
    .catch(error => dispatch({ type: WORDS.LOAD_FAILED, error }));
  dispatch({ type: WORDS.LOAD_REQUEST });
};

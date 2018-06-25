import wordsReducer from "./wordsReducer";
import { fromJS, Map } from "immutable";
import { WORDS, LOADING_STATE } from "../actionTypes";

describe("wordsReducer", () => {
  test("request", () => {
    const result = wordsReducer(Map(), { type: WORDS.LOAD_REQUEST });
    expect(result).toEqualImmutable(
      fromJS({ loadingState: LOADING_STATE.LOADING })
    );
  });

  test("success", () => {
    const data = { data: [{ article: "der" }] };
    const result = wordsReducer(Map(), {
      type: WORDS.LOAD_SUCCESS,
      payload: data
    });
    expect(result).toEqualImmutable(
      fromJS({ loadingState: LOADING_STATE.READY, data })
    );
  });

  test("failed", () => {
    const result = wordsReducer(Map(), { type: WORDS.LOAD_FAILED });
    expect(result).toEqualImmutable(
      fromJS({ loadingState: LOADING_STATE.FAILED })
    );
  });
});

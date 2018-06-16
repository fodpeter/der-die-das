import { createSelector } from "reselect";
import { List, Map } from "immutable";

const getWords = state => state.getIn(["words", "data", "data"]);
const getIndex = state => state.getIn(["game", "wordIndex"]);

export const getWord = createSelector(
  [getWords, getIndex],
  (words = List(), index) => {
    return words.get(index, Map());
  }
);

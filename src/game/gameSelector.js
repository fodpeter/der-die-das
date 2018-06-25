import { createSelector } from "reselect";
import { List, Map } from "immutable";

const getWords = state => state.getIn(["words", "data", "data"]);
const getIndex = state => state.getIn(["game", "wordIndex"]);
const getPermutation = state => state.getIn(["game", "permutation"]);

export const getWord = createSelector(
  [getWords, getPermutation, getIndex],
  (words = List(), permutation = List(), index) => {
    return words.get(permutation.get(index), Map());
  }
);

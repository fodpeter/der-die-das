import { getWord } from "./gameSelector";
import { fromJS, Map } from "immutable";

describe("gameSelector", () => {
  test("returns empty object for empty state", () => {
    expect(getWord(Map())).toEqualImmutable(Map());
  });

  test("returns the word for the index state", () => {
    const word1 = fromJS({ article: "der" });
    const state = fromJS({
      game: {
        wordIndex: 1,
        permutation: [1, 0]
      },
      words: {
        data: {
          version: 1,
          data: [word1]
        }
      }
    });
    expect(getWord(state)).toEqualImmutable(word1);
  });
});

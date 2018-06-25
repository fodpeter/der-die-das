import gameReducer from "./gameReducer";
import { fromJS, Map } from "immutable";
import { ANSWERS } from "./constants";
import { startGame, guessSuccess, guessFailed, gotoNextWord } from "./actions";

jest.mock("./shuffleArray", () => ({
  shuffleArray: numbers => numbers.reverse()
}));

describe("gameReducer", () => {
  test("start", () => {
    const result = gameReducer(Map(), startGame(3));
    expect(result).toEqualImmutable(
      fromJS({
        started: true,
        wordIndex: 0,
        permutation: [2, 1, 0],
        answers: {}
      })
    );
  });

  test("guessFailed", () => {
    const result = gameReducer(Map(), guessFailed("der"));
    expect(result).toEqualImmutable(fromJS({ answers: { der: ANSWERS.FAIL } }));
  });

  test("guessSuccess", () => {
    const result = gameReducer(Map(), guessSuccess("die"));
    expect(result).toEqualImmutable(
      fromJS({ frozen: true, answers: { die: ANSWERS.GOOD } })
    );
  });

  test("gotoNextWord", () => {
    const result = gameReducer(
      fromJS({ wordIndex: 1, permutation: [2, 1, 0] }),
      gotoNextWord()
    );
    expect(result).toEqualImmutable(
      fromJS({
        wordIndex: 2,
        frozen: false,
        answers: {},
        permutation: [2, 1, 0]
      })
    );
  });
});

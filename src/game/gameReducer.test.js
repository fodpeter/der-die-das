import gameReducer from "./gameReducer";
import { fromJS, Map } from "immutable";
import { ANSWERS } from "./constants";
import { startGame, guessSuccess, guessFailed, gotoNextWord } from "./actions";

describe("gameReducer", () => {
  test("start", () => {
    const result = gameReducer(Map(), startGame());
    expect(result).toEqualImmutable(
      fromJS({ started: true, wordIndex: 0, answers: {} })
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
    const result = gameReducer(fromJS({ wordIndex: 3 }), gotoNextWord());
    expect(result).toEqualImmutable(
      fromJS({ wordIndex: 4, frozen: false, answers: {} })
    );
  });
});

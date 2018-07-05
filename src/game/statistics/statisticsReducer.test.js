import statisticsReducer from "./statisticsReducer";
import { fromJS, Map } from "immutable";
import { startGame, guessSuccess, guessFailed } from "../actions";

describe("statisticsReducer", () => {
  test("start", () => {
    const result = statisticsReducer(Map(), startGame(3));
    expect(result).toEqualImmutable(
      fromJS({
        lives: 3,
        counter: 0
      })
    );
  });

  test("guessFailed", () => {
    const result = statisticsReducer(
      fromJS({ lives: 3, counter: 2 }),
      guessFailed("der")
    );
    expect(result).toEqualImmutable(fromJS({ lives: 2, counter: 2 }));
  });

  test("guessFailed underflow", () => {
    const result = statisticsReducer(
      fromJS({ lives: 1, counter: 2 }),
      guessFailed("der")
    );
    expect(result).toEqualImmutable(fromJS({ lives: 3, counter: 0 }));
  });

  test("guessSuccess", () => {
    const result = statisticsReducer(
      fromJS({ lives: 3, counter: 5 }),
      guessSuccess("der")
    );
    expect(result).toEqualImmutable(fromJS({ lives: 3, counter: 6 }));
  });
});

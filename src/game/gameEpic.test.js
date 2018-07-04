import { TestScheduler } from "rxjs/testing";
import { guess, guessSuccess, guessFailed, gotoNextWord } from "./actions";
import { fromJS } from "immutable";
import { handleGuess, redirectToNextWord } from "./gameEpic";

const mockWord = fromJS({ article: "der" });

jest.mock("./gameSelector", () => ({
  getWord: jest.fn(() => mockWord)
}));

describe("game epic", () => {
  let testScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );
  });

  test("guess", () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot("-fm", {
        f: guess("die"),
        m: guess("der")
      });
      const state$ = { value: "mockState" };

      const output$ = handleGuess(action$, state$);

      expectObservable(output$).toBe("-fs", {
        f: guessFailed("die"),
        s: guessSuccess("der")
      });
    });
  });

  test("redirect", () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot("-s", {
        s: guessSuccess("der")
      });

      const output$ = redirectToNextWord(action$);

      expectObservable(output$).toBe("- 500ms g", {
        g: gotoNextWord()
      });
    });
  });
});

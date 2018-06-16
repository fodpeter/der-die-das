import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadData, startGame, guess } from "./actions";
import { Map } from "immutable";
import Game from "./Game";
import ShowWord from "./ShowWord";
import { getWord } from "./gameSelector";

class WordsContainer extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const {
      started,
      guess,
      word,
      answers,
      frozen,
      loadingState,
      startGame
    } = this.props;
    return started ? (
      <ShowWord
        onSelect={guess}
        word={word}
        answers={answers}
        frozen={frozen}
      />
    ) : (
      <Game loadingState={loadingState} startGame={startGame} />
    );
  }
}

const mapStateToProps = state => ({
  started: state.getIn(["game", "started"], false),
  loadingState: state.getIn(["words", "loadingState"]),
  word: getWord(state).get("word"),
  answers: state.getIn(["game", "answers"], Map()).toJS(),
  frozen: state.getIn(["game", "frozen"])
});

const mapDispatchToProps = {
  loadData,
  startGame,
  guess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordsContainer);

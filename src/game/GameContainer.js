import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadData, startGame, guess } from "./actions";
import { List, Map } from "immutable";
import Game from "./Game";
import ShowWord from "./ShowWord";
import { getWord } from "./gameSelector";
import { LOADING_STATE } from "../actionTypes";

class GameContainer extends PureComponent {
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

GameContainer.propTypes = {
  loadingState: PropTypes.oneOf(Object.values(LOADING_STATE)),
  startGame: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
  guess: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  answers: PropTypes.object.isRequired,
  frozen: PropTypes.bool.isRequired,
  word: PropTypes.shape({
    article: PropTypes.string,
    word: PropTypes.string
  })
};

const mapStateToProps = state => ({
  started: state.getIn(["game", "started"], false),
  loadingState: state.getIn(["words", "loadingState"]),
  word: getWord(state).toJS(),
  wordCount: state.getIn(["words", "data", "data"], List()).size,
  answers: state.getIn(["game", "answers"], Map()).toJS(),
  frozen: state.getIn(["game", "frozen"])
});

const mapDispatchToProps = {
  loadData,
  startGame,
  guess
};

const mergeProps = (
  { wordCount, ...restStateProps },
  { startGame, ...restDispatchProps }
) => ({
  ...restStateProps,
  ...restDispatchProps,
  startGame: () => startGame(wordCount)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GameContainer);

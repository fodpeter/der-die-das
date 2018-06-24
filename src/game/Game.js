import React from "react";
import PropTypes from "prop-types";
import Label from "react-bootstrap/lib/Label";
import Button from "react-bootstrap/lib/Button";
import { LOADING_STATE } from "../actionTypes";
import "./Game.css";

const Game = ({ loadingState, startGame }) => (
  <div className="game">
    {loadingState === LOADING_STATE.LOADING && (
      <Label bsStyle="info">Loading...</Label>
    )}
    {loadingState === LOADING_STATE.FAILED && (
      <Label bsStyle="danger">Loading failed</Label>
    )}
    <div>
      <Button
        block
        bsSize="large"
        onClick={startGame}
        disabled={loadingState !== LOADING_STATE.READY}
      >
        Start
      </Button>
    </div>
    <a
      href="http://www.passion4teq.com/articles/der-die-das-genus-regeln/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Der die das article rules
    </a>
  </div>
);

Game.propTypes = {
  loadingState: PropTypes.oneOf(Object.values(LOADING_STATE)),
  startGame: PropTypes.func.isRequired
};

export default Game;

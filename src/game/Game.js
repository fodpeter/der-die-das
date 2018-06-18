import React from "react";
import PropTypes from "prop-types";
import Label from "react-bootstrap/lib/Label";
import Button from "react-bootstrap/lib/Button";
import { LOADING_STATE } from "../actionTypes";
import "./Game.css";

const Game = ({ loadingState, startGame }) => (
  <div className="Game">
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
  </div>
);

Game.propTypes = {
  loadingState: PropTypes.oneOf(Object.values(LOADING_STATE)).isRequired,
  startGame: PropTypes.func.isRequired
};

export default Game;

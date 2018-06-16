import React from "react";
import Label from "react-bootstrap/lib/Label";
import Button from "react-bootstrap/lib/Button";
import { LOADING_STATE } from "../actionTypes";
import "./Game.css";

const ShowWord = ({ loadingState, startGame }) => (
  <div className="Game">
    {loadingState === LOADING_STATE.LOADING && (
      <Label bsStyle="info">Loading...</Label>
    )}
    {loadingState === LOADING_STATE.FAILED && (
      <Label bsStyle="danger">Loading failed</Label>
    )}
    <Button
      block
      bsSize="large"
      onClick={startGame}
      disabled={loadingState !== LOADING_STATE.READY}
    >
      Start
    </Button>
  </div>
);

export default ShowWord;

import React from "react";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import "./ShowWord.css";

const ShowWord = ({ word, onSelect }) => (
  <div className="ShowWord">
    <div className="Word">{word}</div>
    <ButtonGroup className="Buttons">
      <Button bsSize="large" onClick={() => onSelect("der")}>
        der
      </Button>
      <Button bsSize="large" onClick={() => onSelect("die")}>
        die
      </Button>
      <Button bsSize="large" onClick={() => onSelect("das")}>
        das
      </Button>
    </ButtonGroup>
  </div>
);

export default ShowWord;

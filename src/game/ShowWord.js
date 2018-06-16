import React, { PureComponent } from "react";
import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import "./ShowWord.css";
import { ANSWERS } from "./constants";

const articles = ["der", "die", "das"];

class ShowWord extends PureComponent {
  renderButton = article => {
    const { answers, frozen, onSelect } = this.props;
    const failed = answers[article] === ANSWERS.FAIL;
    const style = failed
      ? "danger"
      : answers[article] === ANSWERS.GOOD
        ? "success"
        : "default";
    return (
      <Button
        key={article}
        bsSize="large"
        bsStyle={style}
        onClick={() => onSelect(article)}
        disabled={frozen || failed}
      >
        {article}
      </Button>
    );
  };

  render() {
    const { word } = this.props;
    return (
      <div className="ShowWord">
        <div className="Word">{word}</div>
        <ButtonGroup className="Buttons">
          {articles.map(article => this.renderButton(article))}
        </ButtonGroup>
      </div>
    );
  }
}

export default ShowWord;

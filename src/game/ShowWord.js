import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/lib/Button";
import Well from "react-bootstrap/lib/Well";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import "./ShowWord.css";
import { ANSWERS } from "./constants";
import classnames from "classnames";

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

  renderWord = () => {
    const {
      word: { article, word },
      frozen
    } = this.props;
    return (
      <Well className={classnames("word", { "text-success": frozen })}>
        <span className="word-article">{frozen ? article : "..."}</span> {word}
      </Well>
    );
  };

  render() {
    const {
      word: { word }
    } = this.props;
    return (
      <div className="show-word">
        <TransitionGroup className="word-cards">
          <CSSTransition key={word} timeout={1000} classNames="word-card">
            {this.renderWord()}
          </CSSTransition>
        </TransitionGroup>
        <ButtonGroup className="buttons">
          {articles.map(article => this.renderButton(article))}
        </ButtonGroup>
      </div>
    );
  }
}

ShowWord.propTypes = {
  answers: PropTypes.object.isRequired,
  frozen: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  word: PropTypes.shape({
    article: PropTypes.string,
    word: PropTypes.string
  })
};

ShowWord.defaultProps = {
  word: {}
};

export default ShowWord;

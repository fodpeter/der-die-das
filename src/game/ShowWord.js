import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/lib/Button";
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

  render() {
    const {
      word: { article, word },
      frozen
    } = this.props;
    return (
      <div className="ShowWord">
        <div className={classnames("Word", { "text-success": frozen })}>
          <span className="WordArticle">{frozen ? article : "..."}</span> {word}
        </div>
        <ButtonGroup className="Buttons">
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
    word: PropTypes.number
  })
};

ShowWord.defaultProps = {
  word: {}
};

export default ShowWord;

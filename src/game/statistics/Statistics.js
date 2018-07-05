import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Label from "react-bootstrap/lib/Label";
import "./Statistics.css";
import range from "lodash/range";
import filledHeart from "./heart_filled.svg";
import hollowHeart from "./heart_hollow.svg";
import { CSSTransition } from "react-transition-group";

class Statistics extends PureComponent {
  renderHeart = (index, filled) => (
    <img
      key={index}
      className="heart"
      src={filled ? filledHeart : hollowHeart}
      alt={filled ? "Life" : "Empty"}
    />
  );

  renderHearts = () => {
    const { lives } = this.props;
    return (
      <div>
        Lives: {range(3).map(index => this.renderHeart(index, index < lives))}
      </div>
    );
  };

  renderWords = () => {
    const { counter } = this.props;
    return (
      <CSSTransition in={counter === 0} timeout={1000} classNames="word-count">
        <div className="counter">
          <span>Words:</span>
          <Label bsStyle="success">{counter}</Label>
        </div>
      </CSSTransition>
    );
  };

  render = () => (
    <div className="statistics">
      {this.renderWords()}
      {this.renderHearts()}
    </div>
  );
}

Statistics.propTypes = {
  lives: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired
};

export default Statistics;

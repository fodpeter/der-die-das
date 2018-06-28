import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Label from "react-bootstrap/lib/Label";
import "./Statistics.css";
import range from "lodash/range";
import filledHeart from "./heart_filled.svg";
import hollowHeart from "./heart_hollow.svg";

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
    const { lifes } = this.props;
    return (
      <div>
        Lifes: {range(3).map(index => this.renderHeart(index, index < lifes))}
      </div>
    );
  };

  renderWords = () => {
    const { counter } = this.props;
    return (
      <div className="counter">
        <span>Words:</span>
        <Label bsStyle="success">{counter}</Label>
      </div>
    );
  };

  render = () => (
    <div className="statistics">
      {this.renderHearts()}
      {this.renderWords()}
    </div>
  );
}

Statistics.propTypes = {
  lifes: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired
};

export default Statistics;

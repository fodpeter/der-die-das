import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { loadData } from "./actions";
import { LOADING_STATE } from "../actionTypes";
import ShowWord from "./ShowWord";

class WordsContainer extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { loadingState, data } = this.props;
    if (loadingState === LOADING_STATE.LOADING && !data) {
      return "Loading";
    }
    if (loadingState === LOADING_STATE.FAILED) {
      return "Loading failed";
    }
    return <ShowWord word="Heimat" />;
  }
}

const mapStateToProps = state => ({
  data: state.words.data,
  loadingState: state.words.loadingState
});

const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsContainer);

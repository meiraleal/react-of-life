import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: (rows, cols, seed, interval) => {
      dispatch(actions.startGame(rows, cols, seed, interval));
    },
    takeStep: actions.takeStep
  };
};

class GameOfLife extends Component {
  componentDidMount() {
    this.props.startGame(this.props.rows, this.props.cols, this.props.seed, this.props.interval);
  }
  render() {
    return (<App {...this.props}/>);
  }
}

const StatefulGameOfLife = connect(
  (state) => state,
  mapDispatchToProps
)(GameOfLife);

export default StatefulGameOfLife;

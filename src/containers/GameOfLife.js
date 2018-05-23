import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startGame: (rows, cols, seed, interval) => {
      dispatch(actions.startGame(rows, cols, seed, interval, dispatch));
    },
    takeStep: (gameOfLife, interval) => {
      dispatch(actions.takeStep(gameOfLife, interval));
    }
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
  mapStateToProps,
  mapDispatchToProps
)(GameOfLife);

export default StatefulGameOfLife;

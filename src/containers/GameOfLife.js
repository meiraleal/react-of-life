import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import App from '../components/App';

class GameOfLife extends Component {
  componentDidMount() {
    this.props.startGame(this.props.rows, this.props.cols, this.props.seed, this.props.interval);
  }
  render() {
    return (<App {...this.props}/>);
  }
}

// Map the actions needed inside the App - startGame and the state from redux
const StatefulGameOfLife = connect(
  (state) => state,
  {startGame}
)(GameOfLife);

export default StatefulGameOfLife;

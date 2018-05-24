import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startGame } from '../actions'
import App from '../components/App'

class GameOfLife extends Component {
  componentDidMount() {
    this.props.startGame(this.props.rows, this.props.cols, this.props.seed, this.props.interval)
  }
  render() {
    return (<App {...this.props} />)
  }
}

GameOfLife.propTypes = {
  // The function to start the game, received from the container
  startGame: PropTypes.func.isRequired,
  // the interval (in ms/miliseconds) for each step in the game
  interval: PropTypes.number.isRequired,
  // THe number of rows of the grid
  rows: PropTypes.number.isRequired,
  // The number of cols of the grid
  cols: PropTypes.number.isRequired,
  // The initial seed data to start the game
  seed: PropTypes.array.isRequired,

}

// Map the actions needed inside the App - startGame and the state from redux
const StatefulGameOfLife = connect(
  state => state,
  { startGame },
)(GameOfLife)

export default StatefulGameOfLife

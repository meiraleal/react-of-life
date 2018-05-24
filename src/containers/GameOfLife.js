import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startGame } from '../actions'
import App from '../components/App'

class GameOfLife extends Component {
  componentDidMount() {
    this.props.startGame(this.props.settings)
  }

  render() {
    return (<App generation={this.props.game.generation}
            status={this.props.game.status}
            grid={this.props.game.grid} />)
  }
}

GameOfLife.propTypes = {
  // The function to start the game, received from the container
  startGame: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    // the interval (in ms/miliseconds) for each step in the game
    interval: PropTypes.number.isRequired,
    // THe number of rows of the grid
    rows: PropTypes.number.isRequired,
    // The number of cols of the grid
    cols: PropTypes.number.isRequired,
    // The initialy seed data to start the game
    seed: PropTypes.array.isRequired,
  }).isRequired,
  game: PropTypes.shape({
    generation: PropTypes.number.isRequired,
    grid: PropTypes.array.isRequired,
    status: PropTypes.number.isRequired,
  }).isRequired,
}

// Map the actions needed inside the App - startGame and the state from redux
const StatefulGameOfLife = connect(
  state => state,
  { startGame },
)(GameOfLife)

export default StatefulGameOfLife

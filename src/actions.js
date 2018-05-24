import * as Life from './utils/Life'
import * as types from './constants/ActionTypes'


// stopGame clear the timer that calls takeStep after x miliseconds.
export const stopGame = (interval) => {
  clearInterval(interval)
  return {
    type: types.STOP_GAME,
  }
}

// Component version of takeStep, calling the GameOfLife engine
export const takeStep = (gameOfLife, interval) => {
  const newState = gameOfLife.next().value
  // if the run iterator returns a new grid, it update the state, otherwise it stops the game
  if (newState) {
    return {
      type: types.TAKE_STEP,
      ...newState,
    }
  }
  return dispatch => dispatch(stopGame(interval)) // redux-thunk
}

// startGame receives
export const startGame = (rows, cols, seed, interval) => {
  const gameOfLife = Life.run(rows, cols, seed)
  return (dispatch) => {
    const timer = setInterval(
      () =>
        dispatch(takeStep(gameOfLife, timer)),
      interval,
    )
    return {
      type: types.START_GAME,
    }
  }
}

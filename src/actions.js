import * as Life from './Life';
import * as types from './constants/ActionTypes';


//stopGame clear the timer that calls takeStep after x miliseconds.
export var stopGame = (interval) => {
  clearInterval(interval);
  return {
    type: types.STOP_GAME
  };
};

// Component version of takeStep, calling the GameOfLife engine
export var takeStep = (gameOfLife, interval) => {
  let newState = gameOfLife.next().value;
  if(newState) //if the run iterator returns a new grid, it update the state, otherwise it stops the game
    return {
      type: types.TAKE_STEP,
      ...newState
    };
  else
    return (dispatch) => dispatch(stopGame(interval)); //redux-thunk
};

// startGame receives
export var startGame = (rows, cols, seed, interval) => {
  let gameOfLife = Life.run(rows, cols, seed);
  return (dispatch) => {
    let timer = setInterval(() =>
                            dispatch(takeStep(gameOfLife, timer)),
                            interval);
    return {
      type: types.START_GAME
    };
  };
};

import * as Life from './Life';
import * as types from './constants/ActionTypes';

// Component version of takeStep, calling the GameOfLife engine
export var takeStep = (gameOfLife, interval) => {
  let newState = gameOfLife.next().value;
  if(!newState) //if the run iterator returns undefined, we stop the loop
    clearInterval(interval);
  return {
    type: types.TAKE_STEP,
    ...newState
  };
};

export var startGame = (rows, cols, seed, interval, dispatch) => {
  let gameOfLife = Life.run(rows, cols, seed);
  let timer = setInterval(() =>
                          dispatch(takeStep(gameOfLife, timer)),
                          interval);
  return {
    type: types.START_GAME
  };
};

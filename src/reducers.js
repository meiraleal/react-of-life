import {
  START_GAME,
  TAKE_STEP,
} from './constants/ActionTypes'

import { NOT_RUNNING } from './constants/GameStatus'

const initialState = {
  settings: {
    rows: 50,
    cols: 50,
    interval: 1000,
    seed: [[0, 0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]], // initialState
    //seed:[[28, 28],[28, 31],[29, 27],[30, 27],[30, 31],[31, 27], [31, 28], [31, 29], [31, 30]],
  },
  game: {
    generation: 0,
    status: NOT_RUNNING,
    grid: [],
  },
}

export default function gameOfLife(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return state
    }
    case TAKE_STEP: {
      return {
        ...state,
        ...action,
      }
    }
    default:
      return state
  }
}

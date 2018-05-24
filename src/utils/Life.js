import * as Status from '../constants/GameStatus'

// Initialize an empty grid with the given rows and cols
export const initializeGrid = (rows, cols) => {
  const grid = Array(rows).fill().map(() => Array(cols).fill(0))
  return { generation: 0, status: Status.STARTING, grid }
}

// Given an empty initialized grid, apply the seed
export const seedGrid = (grid, seed) => {
  const newGrid = grid
  seed.forEach((cell) => {
    newGrid[cell[0]][cell[1]] = 1
  })
  return { generation: 0, status: Status.RUNNING, grid: newGrid }
}

// Reducer used to calculate the score of cell and see if it will be dead or alive in the next tick
export const applyRules = (left, right, index, arr, cellState) => {
  if (index < arr.length - 1) { return left + right }

  const rate = left + right
  if (cellState === 1 && (rate === 2 || rate === 3)) {
    return 1
  }
  if (cellState === 0 && rate === 3) {
    return 1
  }
  return 0
}

// Get a table with the count of siblings each cell has
export const getNewCellState = (grid, currentRow, currentCol) => {
  const maxRows = grid.length
  const maxCols = grid[0].length
  const previousRow = currentRow - 1
  const previousCol = currentCol - 1
  const nextRow = currentRow + 1
  const nextCol = currentCol + 1
  // get the 8 possible siblings of a given cell
  // filter cells that doesnt exist (outside of the grid),
  // get the value of the neighboor from the grid to see if it's dead or alive,
  // and count them with a reducer
  return [
    [nextRow, nextCol],
    [nextRow, previousCol],
    [nextRow, currentCol],
    [previousRow, nextCol],
    [previousRow, previousCol],
    [previousRow, currentCol],
    [currentRow, nextCol],
    [currentRow, previousCol]]
    .filter(neighboor => neighboor[0] >= 0 && neighboor[1] >= 0
            && neighboor[0] < maxRows && neighboor[1] < maxCols)
    .map(neighboor => grid[neighboor[0]][neighboor[1]])
    .reduce((left, right, index, arr) =>
      applyRules(left, right, index, arr, grid[currentRow][currentCol]))
}

// Just based in the previous grid, calculate the next one
export const calculateNewState = grid =>
  grid.map((row, currentRow) =>
    row.map((col, currentCol) =>
      getNewCellState(grid, currentRow, currentCol)))

// Used inside the run generator, it receives the
// past grid and returns the new one
export const takeStep = ({ generation, status, grid }) => {
  const newGrid = calculateNewState(grid)
  const endOfGame = JSON.stringify(grid) === JSON.stringify(newGrid)
  if (endOfGame) { return { generation, status: Status.FINISHED, grid } }
  return { generation: generation + 1, status, grid: newGrid }
}

// Generator used to run over all generations of a given seed
export function* run(rows, cols, seed) {
  let grid = initializeGrid(rows, cols)
  yield grid
  grid = seedGrid(grid.grid, seed)
  yield grid
  while (1) {
    grid = takeStep(grid)
    if (grid.status === Status.FINISHED) { return }
    yield grid
  }
}

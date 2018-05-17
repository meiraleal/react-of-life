// The possible states of a GameOfLife instance
export const Status = {NOT_RUNNING: 0, STARTING: 1, RUNNING: 2, FINISHED: 3};

// Initialize an empty grid with the given rows and cols
export var initializeGrid = (rows, cols) => {
  let grid = Array(rows).fill().map(()=> Array(cols).fill(0));
  return {generation: 0, status: Status.STARTING, grid};
};

// Given an empty initialized grid, apply the seed
export var seedGrid = (grid, state) => {
  state.map(cell => grid[cell[0]][cell[1]] = 1);
  return {generation: 0, status: Status.RUNNING, grid};
};

// Reducer used to calculate the score of cell and see if it will be dead or alive in the next tick
export var applyRules = (left, right, index, arr, cellState) => {
  if(index < arr.length - 1)
    return left + right;
  else {
    let rate = left + right;
    if(cellState === 1 && (rate === 2 || rate === 3)) {
      return 1;
    }
    if(cellState === 0 && rate === 3) {
      return 1;
    }
    else
      return 0;
  }
};

// Get a table with the count of siblings each cell has
export var getNewCellState = (grid, currentRow, currentCol) => {
  let maxRows = grid.length;
  let maxCols = grid[0].length;
  let previousRow = currentRow - 1;
  let previousCol = currentCol - 1;
  let nextRow = currentRow + 1;
  let nextCol = currentCol + 1;
  // get the 8 possible siblings of a given cell
  return [
    [nextRow, nextCol],
    [nextRow, previousCol],
    [nextRow, currentCol],
    [previousRow, nextCol],
    [previousRow, previousCol],
    [previousRow, currentCol],
    [currentRow, nextCol],
    [currentRow, previousCol]].filter(neighboor => neighboor[0] >= 0 && neighboor[1] >= 0 //filter cells that doesnt exist (outside of the grid)
                                      && neighboor[0] < maxRows && neighboor[1] < maxCols)
    .map(neighboor => grid[neighboor[0]][neighboor[1]]) // get the value of the neighboor from the grid to see if it's dead or alive
    .reduce((left, right, index, arr) => applyRules(left, right, index, arr, grid[currentRow][currentCol])); //and count them with a reducer
};

// Just based in the previous grid, calculate the next one
export var calculateNewState = (grid) => {
  return grid.map((row, currentRow) =>
                  row.map((col, currentCol) =>
                          getNewCellState(grid, currentRow, currentCol)));
};

// Used inside the run generator, it receives the past grid and returns the new one
export var takeStep = ({generation, status, grid}, oldGrid, seed = []) => {
  var newGrid = calculateNewState(grid);
  if(JSON.stringify(grid) === JSON.stringify(newGrid))
    status = Status.FINISHED;
  else
    generation += 1;
  return {generation, status, grid: newGrid};
};

// Generator used to run over all generations of a given seed
export function* run(rows, cols, seed) {
  var grid = initializeGrid(rows, cols);
  yield grid;
  grid = seedGrid(grid.grid, seed);
  yield grid;
  while(1) {
    grid = takeStep(grid, seed);
    if(grid.status === Status.FINISHED)
      return;
    yield grid;
  }
}

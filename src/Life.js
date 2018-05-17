export const Status = {NOT_RUNNING: 0, STARTING: 1, RUNNING: 2, FINISHED: 3};

export var initializeGrid = (rows, cols) => {
  let grid = Array(rows).fill().map(()=> Array(cols).fill(0));
  return {generation: 0, status: Status.STARTING, grid};
};

export var seedGrid = (grid, state) => {
  state.map(cell => grid[cell[0]][cell[1]] = 1);
  return {generation: 0, status: Status.RUNNING, grid};
};

export var applyRules = (left, right, index, arr, cellState) => { //reducer
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

export var getNewCellState = (grid, currentRow, currentCol) => {
  let maxRows = grid.length;
  let maxCols = grid[0].length;
  let previousRow = currentRow - 1;
  let previousCol = currentCol - 1;
  let nextRow = currentRow + 1;
  let nextCol = currentCol + 1;
  return [
    [nextRow, nextCol],
    [nextRow, previousCol],
    [nextRow, currentCol],
    [previousRow, nextCol],
    [previousRow, previousCol],
    [previousRow, currentCol],
    [currentRow, nextCol],
    [currentRow, previousCol]].filter(neighboor => neighboor[0] >= 0 && neighboor[1] >= 0
                                      && neighboor[0] < maxRows && neighboor[1] < maxCols)
    .map(neighboor => grid[neighboor[0]][neighboor[1]])
    .reduce((left, right, index, arr) => applyRules(left, right, index, arr, grid[currentRow][currentCol]));
};

export var calculateNewState = (grid) => {
  return grid.map((row, currentRow) =>
                  row.map((col, currentCol) =>
                          getNewCellState(grid, currentRow, currentCol)));
};

export var takeStep = ({generation, status, grid}, oldGrid, seed = []) => {
  var newGrid = calculateNewState(grid);
  if(JSON.stringify(grid) === JSON.stringify(newGrid))
    status = Status.FINISHED;
  else
    generation += 1;
  return {generation, status, grid: newGrid};
};


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

export var getInitialGrid = (rows, cols, state) => {
  let grid = Array(50).fill().map(()=> Array(50).fill(0));
  state.map(cell => grid[cell[0]][cell[1]] = 1);
  return grid;
};

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

export var getNewCellState = (grid, currentRow, currentCol, maxRows, maxCols) => {
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

export var calculateNewState = (grid, maxRows, maxCols) => {
  return grid.map((row, currentRow) =>
                  row.map((col, currentCol) =>
                          getNewCellState(grid, currentRow, currentCol, maxRows, maxCols)));
};

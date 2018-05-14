import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import Controls from './Controls';

const rows = 50;
const cols = 50;
//const initialState = [[0,0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]]; //initialState
const initialState = [[8,8], [8, 9], [8, 10], [9, 8], [10, 9]]; //glider

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows,
      cols,
      grid: this.getInitialGrid(rows, cols, initialState)
    };
  }

  getInitialGrid(rows, cols, state) {
    let grid = Array(50).fill().map(()=> Array(50).fill(0));
    state.map(cell => grid[cell[0]][cell[1]] = 1);
    return grid;
  }

  applyRules(left, right, index, arr, cellState) {
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

  }

  getNewCellState(grid, currentRow, currentCol) {
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
                                        && neighboor[0] < this.state.rows && neighboor[1] < this.state.cols)
      .map(neighboor => grid[neighboor[0]][neighboor[1]])
      .reduce((left, right, index, arr) => this.applyRules(left, right, index, arr, grid[currentRow][currentCol]));
  }

  calculateNewState(grid) {
    return grid.map((row, currentRow) =>
                    row.map((col, currentCol) =>
                            this.getNewCellState(grid, currentRow, currentCol)));
  }

  takeStep(grid) {
    let newGrid = this.calculateNewState(grid);
    this.setState({grid: newGrid});
    return grid;
  }

  componentDidMount() {
    setInterval(() => this.takeStep(this.state.grid), 100);
  }

  render() {
    return (
      <div className="App">
        <Controls/>
        <Grid grid={this.state.grid}/>
      </div>
    );
  }
}

export default App;

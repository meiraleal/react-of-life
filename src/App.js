import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Grid from './Grid';
import * as Life from './Life';

const rows = 50;
const cols = 50;
//const initialState = [[0,0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]]; //initialState
//const initialState = [[8,8], [8, 9], [8, 10], [9, 8], [10, 9]]; //glider
const initialState = [[28,28], [28, 31], [29, 27], [30, 27], [30, 31], [31, 27], [31, 28], [31, 29], [31, 30]]; //spaceship

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows,
      cols,
      generation: 0,
      isEmpty: true,
      isRunning: false,
      grid: Life.initializeGrid(rows, cols, initialState)
    };
  }

  takeStep(oldGrid, initialState) {
    let generation = this.state.generation;
    let grid;
    let isEmpty = this.state.isEmpty;
    let isRunning = this.state.isRunning;
    if(this.state.isEmpty) {
      grid = Life.populateGrid(this.state.grid, initialState);
      isEmpty = false;
      isRunning = true;
    }
    else
      grid = Life.calculateNewState(oldGrid, this.state.rows, this.state.cols);
    //check if nothing is happening over a generation. Array comparison in a loop would be faster.
    if(JSON.stringify(oldGrid) === JSON.stringify(grid))
      isRunning = false;
    else
      generation += 1;
    this.setState({grid, generation, isEmpty, isRunning});
  }

  componentDidMount() {
    setInterval(() => this.takeStep(this.state.grid, initialState), 100);
  }

  render() {
    return (
      <div className="App">
        <Header generation={this.state.generation}/>
        <Grid grid={this.state.grid} />
      </div>
    );
  }
}

export default App;

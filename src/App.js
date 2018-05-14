import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import Controls from './Controls';
import * as Life from './Life';


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
      grid: Life.getInitialGrid(rows, cols, initialState)
    };
  }

  takeStep(grid) {
    let newGrid = Life.calculateNewState(grid, this.state.rows, this.state.cols);
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

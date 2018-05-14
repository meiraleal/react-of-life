import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Grid from './Grid';
import * as Life from './Life';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: 0,
      isEmpty: true,
      isRunning: false,
      grid: Life.initializeGrid(props.rows, props.cols)
    };
  }

  takeStep(oldGrid, seed) {
    let generation = this.state.generation;
    let grid;
    let isEmpty = this.state.isEmpty;
    let isRunning = this.state.isRunning;
    if(this.state.isEmpty) {
      grid = Life.populateGrid(this.state.grid, seed);
      isEmpty = false;
      isRunning = true;
    }
    else
      grid = Life.calculateNewState(oldGrid, this.props.rows, this.props.cols);
    //check if nothing is happening over a generation. Array comparison in a loop would be faster.
    if(JSON.stringify(oldGrid) === JSON.stringify(grid))
      isRunning = false;
    else
      generation += 1;
    this.setState({grid, generation, isEmpty, isRunning});
  }

  componentDidMount() {
    setInterval(() => this.takeStep(this.state.grid, this.props.seed), 100);
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

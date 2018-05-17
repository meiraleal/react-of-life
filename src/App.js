import React, { Component } from 'react';
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

  takeStep(oldGrid, seed = []) {
    let { grid, generation, isEmpty, isRunning } = Life.takeStep(this.state, oldGrid, seed); //switch the old state of the grid for the next one
    this.setState({grid, generation, isEmpty, isRunning});
  }

  componentDidMount() {
    setInterval(() =>
                this.takeStep(this.state.grid, this.props.seed),
                this.props.interval);
  }

  render() {
    return (
      <div className="App">
        <Header generation={this.state.generation} />
        <Grid grid={this.state.grid} rows={this.props.rows} cols={this.props.cols} />
      </div>
    );
  }
}

export default App;

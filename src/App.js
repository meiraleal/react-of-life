import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import * as Life from './Life';

class App extends Component {
  constructor(props) {
    super(props);
    // As all state is managed in the container component, it isn't necessary to use redux yet (no communication between components)
    this.state = {
      generation: 0,
      status: Life.Status.NOT_RUNNING,
      grid: []
    };
  }

  takeStep(gameOfLife, interval) {
    let newState = gameOfLife.next().value;
    console.log(newState);
    if(newState)
      this.setState(newState);
    else //if the run iterator returns undefined, we stop the loop
      clearInterval(interval);
  }

  componentDidMount() {
    let gameOfLife = Life.run(this.props.rows, this.props.cols, this.props.seed);
    let interval = setInterval(() =>
                               this.takeStep(gameOfLife, interval),
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

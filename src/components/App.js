import React from 'react';
import Header from './Header';
import Grid from './Grid';
import './app.css';

var App = ((props) => {
  return (
    <div className="App">
      <Header generation={props.generation} />
      <Grid grid={props.grid} rows={props.rows} cols={props.cols} />
    </div>
  );
});

export default App;

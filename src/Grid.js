import React from 'react';
import Cell from './Cell';

var generateGrid = (grid) => {
  return grid.map((row, rowIndex) =>
                  row.map((col, colIndex) =>
                          <Cell key={`${rowIndex}${colIndex}`} state={col}/>));
};
var getGridStyle = (rows, cols) => {
  return {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`
  };
};

var Grid = (props) => {
  return (
    <div className="Grid" style={getGridStyle(props.rows, props.cols)}>
      {generateGrid(props.grid)}
    </div>
  );
};

export default Grid;

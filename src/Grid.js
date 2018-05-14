import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component {
  generateGrid(grid) {
    return grid.map((row, rowIndex) =>
                    row.map((col, colIndex) =>
                            <Cell key={`${rowIndex}${colIndex}`}state={col}/>));
  }

  render() {
    return (
      <div className="Grid">
        {this.generateGrid(this.props.grid)}
      </div>
    );
  }
}

export default Grid;

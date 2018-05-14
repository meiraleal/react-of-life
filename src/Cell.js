import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`Cell ${this.props.state ? 'Alive' : 'Dead'}`}></div>
      </React.Fragment>
    );
  }
}

export default Cell;

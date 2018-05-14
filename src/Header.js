import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Game Of Life</h1>
        <h2>Generation: {this.props.generation}</h2>
      </div>
    );
  }
}

export default Header;

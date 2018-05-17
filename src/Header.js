import React from 'react';

var Header = (props) => {
    return (
      <div className="Header">
        <h1>Game Of Life</h1>
        <h2>Generation: {props.generation}</h2>
      </div>
    );
};

export default Header;

import React from 'react';

var Cell = (props) => {
  return (
    <div className={`Cell ${props.state ? 'Alive' : 'Dead'}`}></div>
  );
};

export default Cell;

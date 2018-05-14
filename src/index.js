import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const rows = 50;
const cols = 50;
//const seed = [[0,0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]]; //initialState
//const seed = [[8,8], [8, 9], [8, 10], [9, 8], [10, 9]]; //glider
const seed = [[28,28], [28, 31], [29, 27], [30, 27], [30, 31], [31, 27], [31, 28], [31, 29], [31, 30]]; //spaceship

ReactDOM.render(<App {...{rows,cols,seed}}/>, document.getElementById('root'));

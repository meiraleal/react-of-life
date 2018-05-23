import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import GameOfLife from './containers/GameOfLife.js';

const store = createStore(reducers);
render(
  <Provider store={store}>
    <GameOfLife />
  </Provider>,
  document.getElementById('root')
);

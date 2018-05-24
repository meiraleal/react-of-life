import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import GameOfLife from './containers/GameOfLife';

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)));

render(
  <Provider store={store}>
    <GameOfLife />
  </Provider>,
  document.getElementById('root')
);

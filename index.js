import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GameOfLife from './src/containers/GameOfLife';
import reducers from './src/reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const Main = () => {
  return (
    <Provider store={store}>
      <GameOfLife />
    </Provider>
  );
};

AppRegistry.registerComponent('reactOfLife', () => Main);

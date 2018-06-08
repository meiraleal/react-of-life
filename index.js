import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import GameOfLife from './src/containers/GameOfLife'
import reducers from './src/reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

const Main = () => (
  <Provider store={store}>
    <GameOfLife />
  </Provider>
)

AppRegistry.registerComponent('reactOfLife', () => Main)

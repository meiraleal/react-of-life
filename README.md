# React of Life

[Conway's Game Of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) implementation using React Native and Redux.

The container component "App" receives settings (rows, cols and seed) to start a Game Of Life instance. After it mounts, it calls a generator inside a setInterval that runs until the game finish and no more generations are possible. When the generator is done, we clear the setInterval and stop our game.

Tests created using Jest & Enzyme.

![Screenshot](GameOfLife.png?raw=true "Screenshot")

## Files

```
|-- android/                         <-- android project
|-- ios/                             <-- ios
|-- src/
    |-- actions.js                   <-- Redux actions
    |-- reducers.js                  <-- Redux reducers
    |-- components
    |   |-- App.js                   <-- Main App - stateles component
    |   |-- App.test.js              <-- Tests for the main app
    |   |-- Cell.js                  <-- Individual cell component
    |   |-- Grid.js                  <-- Grid component
    |   |-- Header.js                <-- Header of the App
    |   |-- __snapshots__
    |       |-- App.test.js.snap     <-- Jest snapshot tests
    |-- constants
    |   |-- ActionTypes.js
    |   |-- GameStatus.js
    |-- containers
    |   |-- GameOfLife.js            <-- Main container - supply App with props
    |-- utils
        |-- Life.js                  <-- Game Of Life Engine
        |-- Life.test.js             <-- Tests
|-- app.json
|-- package.json
|-- package-lock.json
|-- README.md <-- this file
|-- index.js <-- Entry point. Where we set up the app and the redux store
```

## Running

npm install

react-native run-android

## Debugging

As the app uses redux, you can change the settings like number of rows, cols and seed data using [React Native Debugger](https://github.com/jhen0409/react-native-debugger) with [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).

Seed sugestions:

1. Seed proposed in the challenge (default)
[[0,0], [0, 1], [1, 0], [1, 3], [2, 1], [2, 2]]

2. Glider
[[8,8], [8, 9], [8, 10], [9, 8], [10, 9]]

3. Spaceship
[[28,28], [28, 31], [29, 27], [30, 27], [30, 31], [31, 27], [31, 28], [31, 29], [31, 30]]


## Testing

yarn test

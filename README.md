# React of Life

Game Of Life implementation using React Native and Redux.

The container component "App" receives settings (rows, cols and seed) to start a Game Of Life instance. After it mounts, it calls a generator inside a setInterval that runs until the game finish and no more generations are possible. When the generator is done, we clear the setInterval and stop our game.

Tests created using Jest & Enzyme.


## Running

npm install

react-native run-android

## Testing

yarn test

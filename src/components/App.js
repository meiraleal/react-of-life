import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Header from './Header'
import Grid from './Grid'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
})

const App = (props => (
  <View className="App" style={styles.container}>
    <Header generation={props.generation} status={props.status}/>
    <Grid grid={props.grid} />
  </View>
))

App.propTypes = {
  // The current generation since the game started
  generation: PropTypes.number.isRequired,
  // The current grid with the live and dead cells
  grid: PropTypes.array.isRequired,
}

export default App

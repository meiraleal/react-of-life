import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Grid from './Grid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  }
});

var App = ((props) => {
  return (
    <View className="App" style={styles.container}>
      <Header generation={props.generation} />
      <Grid grid={props.grid} rows={props.rows} cols={props.cols} />
    </View>
  );
});

export default App;

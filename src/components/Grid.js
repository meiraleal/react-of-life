import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

var generateGrid = (grid) => {
  return grid.map((row, rowIndex) =>
                  row.map((colValue, colIndex) =>
                          <Cell key={`${rowIndex}-${colIndex}`} status={colValue}/>));
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10
  }
});

var Grid = (props) => {
  return (
    <View className="Grid" style={styles.grid}>
      {generateGrid(props.grid)}
    </View>
  );
};

export default Grid;

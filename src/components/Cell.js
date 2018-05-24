import React from 'react';
import { View, StyleSheet } from 'react-native';

var Cell = (props) => {
  return (
    <View style={[styles.cell, props.status ? styles.alive : styles.dead]}></View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  cell: {
    width: "2%",
    height: "2%",
    borderWidth: 0.3,
    borderColor: "#333"
  },
  dead: {
    backgroundColor: "#FFF"
  },
  alive: {
    backgroundColor: "#000"
  }
});
